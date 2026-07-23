import { useState, useEffect, useMemo, useRef } from "react";
import { supabase } from "../../lib/supabaseClient";

import AppModal from "../AppModal";

const CATEGORIES = [
  { key: "cpu", label: "CPU", table: "processors", idKey: "cpu_id", hasTdp: true },
  { key: "motherboard", label: "Motherboard", table: "motherboards", idKey: "mobo_id", hasTdp: true },
  { key: "ram", label: "Memory", table: "memory_kits", idKey: "ram_id", hasTdp: false },
  { key: "storage", label: "Storage", table: "storage", idKey: "storage_id", hasTdp: true },
  { key: "gpu", label: "Video Card", table: "graphics_cards", idKey: "gpu_id", hasTdp: true },
  { key: "psu", label: "Power Supply", table: "power_supplies", idKey: "psu_id", hasTdp: false },
];

export default function PartPicker({ show, onClose }) {
  const [options, setOptions] = useState({});
  const [selected, setSelected] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  const wrapperRef = useRef(null);

  useEffect(() => {
    CATEGORIES.forEach(async ({ key, table }) => {
      const { data, error } = await supabase
        .from(table)
        .select("*");

      if (!error) {
        setOptions(prev => ({
          ...prev,
          [key]: data,
        }));
      }
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleSelect = (catKey, part) => {
    setSelected(prev => ({
      ...prev,
      [catKey]: part,
    }));

    setOpenDropdown(null);
  };

  const handleRemove = catKey => {
    setSelected(prev => {
      const next = { ...prev };
      delete next[catKey];
      return next;
    });
  };

  const compatibility = useMemo(() => {
    const cpu = selected.cpu;
    const motherboard = selected.motherboard;
    const ram = selected.ram;

    if (
      cpu &&
      motherboard &&
      cpu.Socket !== motherboard.Socket
    ) {
      return {
        ok: false,
        reason: `CPU socket (${cpu.Socket}) does not match Motherboard socket (${motherboard.Socket})`,
      };
    }

    if (
      ram &&
      motherboard &&
      ram.ram_type !== motherboard.ram_type
    ) {
      return {
        ok: false,
        reason: `RAM type (${ram.ram_type}) does not match Motherboard RAM type (${motherboard.ram_type})`,
      };
    }

    return {
      ok: true,
      reason: null,
    };
  }, [selected]);

  const isComplete = CATEGORIES.every(
    ({ key }) => selected[key]
  );

  const totalWatts = useMemo(() => {
    if (!isComplete) return null;

    return CATEGORIES.reduce((sum, { key, hasTdp }) => {
      if (!hasTdp) return sum;

      return (
        sum +
        (Number(selected[key]?.tdp_wattage) || 0)
      );
    }, 0);
  }, [selected, isComplete]);

  return (
    <AppModal
      show={show}
      onClose={onClose}
      title="PC Builder"
      className="builder-modal"
      size="lg"
    >
      <div
        className="pc-builder"
        ref={wrapperRef}
      >
        <div
          className={`builder-status ${
            compatibility.ok
              ? "status-ok"
              : "status-error"
          }`}
        >
          <span>
            {compatibility.ok
              ? "Parts are: Compatible"
              : `Incompatible: ${compatibility.reason}`}
          </span>

          {isComplete && (
            <span className="watts-display">
              {totalWatts} W Estimated
            </span>
          )}
        </div>

        <div className="builder-table">
          <div className="builder-col-header">
            <span>Component</span>
            <span>Selection</span>
          </div>

          {CATEGORIES.map(
            ({ key, label, idKey }) => (
              <div
                className="builder-row"
                key={key}
              >
                <span className="component-label">
                  {label}
                </span>

                <div className="selection-cell">
                  {selected[key] ? (
                    <div className="selected-part">
                      <span>
                        {selected[key].Brand}{" "}
                        {selected[key].Model}
                      </span>

                      <button
                        className="retro-button small"
                        onClick={() =>
                          handleRemove(key)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="dropdown-wrapper">
                      <button
                        className="retro-button"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === key
                              ? null
                              : key
                          )
                        }
                      >
                        + Add
                      </button>

                      {openDropdown === key && (
                        <div className="dropdown-menu-custom">
                          {options[key]?.length ? (
                            options[key].map(
                              part => (
                                <div
                                  key={part[idKey]}
                                  className="dropdown-item-custom"
                                  onClick={() =>
                                    handleSelect(
                                      key,
                                      part
                                    )
                                  }
                                >
                                  {part.Brand}{" "}
                                  {part.Model}
                                </div>
                              )
                            )
                          ) : (
                            <div className="dropdown-item-custom disabled">
                              Loading...
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>

        <div className="builder-reminder">
          <strong>Reminder:</strong>

          <p>
            {isComplete
              ? "Configuration complete."
              : "Add your components to validate configuration."}
          </p>
        </div>
      </div>
    </AppModal>
  );
}
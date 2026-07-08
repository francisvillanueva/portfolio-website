import { supabase } from './supabaseClient'

const TABLE_MAP = {
  cpu: 'processors',
  gpu: 'graphics_cards',
  motherboard: 'motherboards',
  ram: 'memory_kits',
  storage: 'storage',
  psu: 'power_supplies',
}

const ID_KEY = {
  cpu: 'cpu_id',
  gpu: 'gpu_id',
  motherboard: 'mobo_id',
  ram: 'ram_id',
  storage: 'storage_id',
  psu: 'psu_id',
}

export async function fetchParts(category) {
  const table = TABLE_MAP[category]
  const { data, error } = await supabase.from(table).select('*')
  if (error) throw error
  return data
}

export { TABLE_MAP, ID_KEY }
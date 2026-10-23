// src/lib/sanityQueries.js
import { defineQuery } from 'groq';

/**
 * Single query that fetches ALL content needed by the frontend.
 * Shape MUST match src/content/fallbacks.js exactly.
 */
export const ALL_CONTENT_QUERY = defineQuery`*[_type in ["siteSettings", "aboutPage", "resume", "project", "socialLink"]]{
  _type,
  _id,
  _createdAt,
  _updatedAt,
  // aboutPage fields
  greeting,
  welcomeMessage,
  bio,
  // resume fields
  header,
  experience[] {
    role,
    company,
    startDate,
    endDate,
    current,
    description,
    technologies
  },
  education[] {
    degree,
    school,
    startDate,
    endDate,
    description
  },
  skills[] {
    category,
    items
  },
  // project fields (repeatable)
  slug,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image { asset->{ _id, url } },
  order,
  // socialLink fields (repeatable)
  platform,
  url,
  order
} | order(_type desc, order asc)`;
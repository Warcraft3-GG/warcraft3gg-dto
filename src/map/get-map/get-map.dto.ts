export type GetMapDimensions = {
  x: number
  y: number
}

export type GetMapParseDetailsResponse = {
  category: string
  tileset: string
  dimensions: GetMapDimensions
  playableArea: GetMapDimensions
  date: Date
  /**
   * Map size in bytes
   */
  size: number
  /**
   * Recommended players
   * Example: 2, 3+
   */
  players: string
}

export type GetMapParseMapFileResponse = {
  content: Buffer
  sha1: string
}

export type GetMapDTO = {
  id: number
  name: string
  url: string
  description: string
  details: GetMapParseDetailsResponse
  image: string
  file?: GetMapParseMapFileResponse
}

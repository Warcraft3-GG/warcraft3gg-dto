export type GetMapDimensions = {
  x: number
  y: number
}

export type GetMapDetailsDTO = {
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

export type GetMapFileDTO = {
  content: Buffer
  sha1: string
}

export type GetMapDTO = {
  id: number
  name: string
  url: string
  version?: string
  description: string
  details: GetMapDetailsDTO
  image: string
  file?: GetMapFileDTO
}

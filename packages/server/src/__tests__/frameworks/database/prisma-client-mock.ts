import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, MockProxy } from 'jest-mock-extended'

import prisma from '@/frameworks/database/prisma-client-helper'

jest.mock('@/frameworks/database/prisma-client-helper', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>()
}))

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = (prisma as unknown) as MockProxy<PrismaClient>

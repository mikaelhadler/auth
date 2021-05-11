import request from 'supertest'
import { app } from '@/frameworks/config'
import { prismaMock } from '@/__tests__/frameworks/database/prisma-client-mock'

describe('POST /api/auth-groups', () => {
  it('should return HttpResponse serverError on repository throws', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    prismaMock.as_auth_groups.create.mockRejectedValueOnce(new Error('any_repository_error'))

    const { body, statusCode } = await request(app)
      .post('/api/auth-groups')
      .send({
        title: 'admin',
        activities: [
          {
            id: 'd0d8a425-7665-417d-9f70-0712c4bdae42',
            name: 'auth-group',
            permissions: [
              'readonly',
              'create',
              'delete',
              'update'
            ]
          }
        ]
      })

    expect(statusCode).toBe(500)
    expect(body).toMatchSnapshot()
  })
  it('should return HttpResponse Ok on success', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    prismaMock.as_auth_groups.create.mockReturnValueOnce(mockAuthGroupPrismaRepository)

    const { body, statusCode } = await request(app)
      .post('/api/auth-groups')
      .send({
        title: 'admin',
        activities: [
          {
            id: 'd0d8a425-7665-417d-9f70-0712c4bdae42',
            name: 'auth-group',
            permissions: [
              'readonly',
              'create',
              'delete',
              'update'
            ]
          }
        ]
      })

    expect(statusCode).toBe(200)
    expect(body).toMatchSnapshot()
  })
})

const mockAuthGroupPrismaRepository = [
  {
    id: '37f2e75e-4b86-4a99-977e-2aea6d4c782b',
    title: 'Administrator',
    activities: [
      {
        activity_id: 'd0d8a425-7665-417d-9f70-0712c4bdae42',
        auth_groups_id: '37f2e75e-4b86-4a99-977e-2aea6d4c782b',
        createdAt: '2021-05-07T17:17:30.941Z',
        activity: {
          id: 'd0d8a425-7665-417d-9f70-0712c4bdae42',
          name: 'auth-group',
          permissions: ['readonly', 'create', 'delete', 'update']
        }
      }
    ]
  }
]

import { AuthGroup } from "@auth/domain";
import { client } from "@/config/http";

// export default {
//   async authGroupList(): Promise<AuthGroup[]> {
//     const list = await client.get<AuthGroup[]>("/api/auth-groups");
//     return list.data;
//   },
// };

export default class AuthGroupService implements AuthGroupRepository {}

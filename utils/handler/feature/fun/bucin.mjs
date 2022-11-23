import { bucin } from "@bochilteam/scraper";

const handle = async (m, { q, conn, bb }) => {
    conn.sendteks(m.chat, bb(await bucin())+'\n\n By :'+q.name, m)
}

export default handle;

const handle = async (m, { q, conn, isAdmin, isBotAdmin, quoted, quotry }) => {
	if (!m.isGc) return conn.sendteks(m.chat, q.forgc, m);
	if (!isAdmin) return conn.sendteks(m.chat, q.admin, m);
	if (!isBotAdmin) return conn.sendteks(m.chat, q.botadmin, m);
	if (!quoted) return conn.sendteks(m.chat, q.forteks, m)
	conn.groupUpdateDescription(m.chat, quotry)
	.then(v => conn.sendteks(m.chat, q.sukses, m))
	.catch(v => conn.sendteks(m.chat, q.gagal, m))
};

export default handle;
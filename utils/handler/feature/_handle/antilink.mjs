
const handle = async(m, { up, q, d, conn, isBotAdmin, isAdmin, budy, userAfk }) => {
	// REPLY
	const rep = async (teks) => await conn.sendteks(m.chat, teks, d.f1('Notifikasi Keamanan Group', ''))
	// DELETE
	const del = async () => await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender} });
	// KICK
	const kik = async () => await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
	try {
		if (!m.chat.endsWith(q.idgc)) return
		if (conn.db.data.chat[m.chat].antilink) {
			if (budy.match(`chat.whatsapp.com`)) {
				rep('[ ANTI LINK ]\ngroup ini dilengkapi dengan anti link\nanda melanggar larangan bot\nAnda berhak di kick');
				if (isAdmin) throw 'Maaf Kamu admin ternyata';
				if (m.isOwn) throw 'Oh tidak, kamu ownerku';
				if (!isBotAdmin) throw 'Oh tidak, Bot not admin';
				del();
				kik();
			}
		}
	} catch (e) {
		conn.sendteks(m.chat, e, m)
	}
};

export default handle;
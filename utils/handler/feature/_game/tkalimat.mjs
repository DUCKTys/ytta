import simi from 'similarity';
let sensitive = 0.75
const handle = async (m, { q, conn, bb, budy }) => {
	let i = m.chat
	conn.kalimat = conn.kalimat ? conn.kalimat : {}
	if (i in conn.kalimat) {
		if (simi(conn.kalimat[i][2], budy.toLowerCase()) >= sensitive) {
			conn.sendteks(i, `Jawaban benarr!!!\n\nSoalan:\n${bb(conn.kalimat[i][1])}\nJawaban : ${conn.kalimat[i][2]}`, m)
			clearTimeout(conn.kalimat[i][3])
			delete conn.kalimat[i]
		}
	}
}

export default handle;
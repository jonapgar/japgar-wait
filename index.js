function wait(ms){ 
	return new Promise(res=>setLooseTimeout(res,Math.round(ms)))
}

module.exports = wait
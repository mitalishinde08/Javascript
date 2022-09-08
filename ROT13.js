function rot13(str) {
    decode_map = {
        A:'N', B:'O', C: 'P',D: 'Q',E: 'R',F:'S',
        G:'T',H:'U',I:'V',J:'W',K:'X',L:'Y',M:'Z',
        N:'A',O:'B',P:'C',Q:'D', R:'E',S:'F',T:'G',U:'H',
        V:'I',W:'J',X:'K',Y:'L',Z:'M'
    }

    let reg = /[A-Z]/;
    s = str.split('');
    for (let i=0; i<s.length;i++) {
        if (reg.test(s[i])) {
            s[i] = decode_map[s[i]];
        }
    }
	return s.join('')
}


console.log(rot13('SERR PBQR PNZC'))

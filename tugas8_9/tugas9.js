
    // HITUNG LUAS  

    // Luas Segitiga
    function hitungLuasSegitiga() {
      const alasSegitiga = parseFloat(document.getElementById('alasSegitiga').value);
      const tinggiSegitiga = parseFloat(document.getElementById('tinggiSegitiga').value); 
      const hasilLuasSegitiga = 0.5 * alasSegitiga * tinggiSegitiga;
      document.getElementById('hasilLuasSegitiga').textContent = `Luas = ${hasilLuasSegitiga} cm`;
    }

    // Luas Lingkaran
    function hitungLuasLingkaran() {
      const jariJariLingkaran = parseFloat(document.getElementById('jariJariLingkaran').value);
      const hasilLuasLingkaran = Math.PI * jariJariLingkaran * jariJariLingkaran;
      document.getElementById('hasilLuasLingkaran').textContent = `Luas = ${hasilLuasLingkaran} cm`;
    }

    // Luas Persegi
    function hitungLuasPersegi() {
      const sisiPersegi = parseFloat(document.getElementById('sisiPersegi').value);
      const hasilLuasPersegi = sisiPersegi * sisiPersegi;
      document.getElementById('hasilLuasPersegi').textContent = `Luas = ${hasilLuasPersegi} cm`;
    }

    // Luas Persegi Panjang
    function hitungLuasPersegiPanjang() {
      const panjangPersegiPanjang = parseFloat(document.getElementById('panjangPersegiPanjang').value);
      const lebarPersegiPanjang = parseFloat(document.getElementById('lebarPersegiPanjang').value);
      const hasilLuasPersegiPanjang = panjangPersegiPanjang * lebarPersegiPanjang;
      document.getElementById('hasilLuasPersegiPanjang').textContent = `Luas = ${hasilLuasPersegiPanjang} cm`;
    }

    // Luas Jajar Genjang
    function hitungLuasJajarGenjang() {
      const alasJajarGenjang = parseFloat(document.getElementById('alasJajarGenjang').value);
      const tinggiJajarGenjang = parseFloat(document.getElementById('tinggiJajarGenjang').value);
      const hasilLuasJajarGenjang = alasJajarGenjang * tinggiJajarGenjang;
      document.getElementById('hasilLuasJajarGenjang').textContent = `Luas = ${hasilLuasJajarGenjang} cm`;
    }


    // HITUNG KELILING

    // Keliling Segitiga
    function hitungKelilingSegitiga() {
      const s1Segitiga = parseFloat(document.getElementById('s1Segitiga').value);
      const s2Segitiga = parseFloat(document.getElementById('s2Segitiga').value);
      const s3Segitiga = parseFloat(document.getElementById('s3Segitiga').value);
      const hasilKelilingSegitiga = s1Segitiga + s2Segitiga + s3Segitiga;
      document.getElementById('hasilKelilingSegitiga').textContent = `Keliling = ${hasilKelilingSegitiga} cm`;
    }

    // Keliling Lingkaran
    function hitungKelilingLingkaran() {
      const jariLingkaran = parseFloat(document.getElementById('jariLingkaran').value);
      const hasilKelilingLingkaran = 2 * Math.PI * jariLingkaran;
      document.getElementById('hasilKelilingLingkaran').textContent = `Keliling = ${hasilKelilingLingkaran} cm`;
    }

    // Keliling Persegi
    function hitungKelilingPersegi() {
      const s1Persegi = parseFloat(document.getElementById('s1Persegi').value)
      const hasilKelilingPersegi = 4 * s1Persegi;
      document.getElementById('hasilKelilingPersegi').textContent = `Keliling = ${hasilKelilingPersegi} cm`;
    }

    // Keliling Persegi Panjang
    function hitungKelilingPersegiPanjang() {
      const panjangPersegiPanjang = parseFloat(document.getElementById('panjangPersegiPanjang').value);
      const lebarPersegiPanjang = parseFloat(document.getElementById('lebarPersegiPanjang').value);
      const hasilKelilingPersegiPanjang = 2 * (panjangPersegiPanjang + lebarPersegiPanjang);
      document.getElementById('hasilKelilingPersegiPanjang').textContent = `Keliling = ${hasilKelilingPersegiPanjang} cm`;
    }

    // Keliling jajar Genjang
    function hitungKelilingJajarGenjang() {
      const s1JajarGenjang = parseFloat(document.getElementById('s1JajarGenjang').value);
      const s2JajarGenjang = parseFloat(document.getElementById('s2JajarGenjang').value);
      const hasilKelilingJajarGenjang = 2 * (s1JajarGenjang + s2JajarGenjang);
      document.getElementById('hasilKelilingJajarGenjang').textContent = `Keliling = ${hasilKelilingJajarGenjang} cm`;
    }


    // HITUNG VOLUME

    // Volume Segitiga
    function hitungVolumeSegitiga() {
      const alasVolumeSegitiga = parseFloat(document.getElementById('alasVolumeSegitiga').value);
      const tinggiVolumeSegitiga = parseFloat(document.getElementById('tinggiVolumeSegitiga').value);
      const tinggiPrismaSegitiga = parseFloat(document.getElementById('tinggiPrismaSegitiga').value);
      const hasilVolumeSegitiga = 0.5 * alasVolumeSegitiga * tinggiVolumeSegitiga * tinggiPrismaSegitiga;
      document.getElementById('hasilVolumeSegitiga').textContent = `Volume = ${hasilVolumeSegitiga} cm`;
    }

    // volume bola
    function hitungVolumeBola() {
      const jariBola = parseFloat(document.getElementById('jariBola').value);
      const hasilVolumeBola = (4/3) * Math.PI * jariBola * jariBola * jariBola;
      document.getElementById('hasilVolumeBola').textContent = `Volume = ${hasilVolumeBola} cm`;
    }

    // volume kubus
    function hitungVolumeKubus() {
      const sisiKubus = parseFloat(document.getElementById('sisiKubus').value);
      const hasilVolumeKubus = sisiKubus * sisiKubus * sisiKubus;
      document.getElementById('hasilVolumeKubus').textContent = `Volume = ${hasilVolumeKubus} cm`;
    }

    // volume balok
    function hitungVolumeBalok() {
      const panjangBalok = parseFloat(document.getElementById('panjangBalok').value);
      const lebarBalok = parseFloat(document.getElementById('lebarBalok').value);
      const tinggiBalok = parseFloat(document.getElementById('tinggiBalok').value);
      const hasilVolumeBalok = panjangBalok * lebarBalok * tinggiBalok;
      document.getElementById('hasilVolumeBalok').textContent = `Volume = ${hasilVolumeBalok} cm`;
    }

    // volume trapesium
    function hitungVolumeTrapesium() {
      const alasTrapesium = parseFloat(document.getElementById('alasTrapesium').value);
      const tinggiTrapesium = parseFloat(document.getElementById('tinggiTrapesium').value);
      const prismaTrapesium = parseFloat(document.getElementById('prismaTrapesium').value);
      const hasilVolumeTrapesium = 0.5 * alasTrapesium * tinggiTrapesium * prismaTrapesium;
      document.getElementById('hasilVolumeTrapesium').textContent = `Volume = ${hasilVolumeTrapesium} cm`;
    }


    // tombol luas
    const btnLuasSegitiga = document.getElementById('btnLuasSegitiga');
    const btnLuasLingkaran = document.getElementById('btnLuasLingkaran');
    const btnLuasPersegi = document.getElementById('btnLuasPersegi');
    const btnLuasPersegiPanjang = document.getElementById('btnLuasPersegiPanjang');
    const btnLuasJajarGenjang = document.getElementById('btnLuasJajarGenjang');

    const inputLuasSegitiga = document.getElementById('inputLuasSegitiga');
    const inputLuasLingkaran = document.getElementById('inputLuasLingkaran');
    const inputLuasPersegi = document.getElementById('inputLuasPersegi');
    const inputLuasPersegiPanjang = document.getElementById('inputLuasPersegiPanjang');
    const inputLuasJajarGenjang = document.getElementById('inputLuasJajarGenjang');

    btnLuasSegitiga.addEventListener('click', () => {
            inputLuasSegitiga.classList.remove('hidden');
            inputLuasLingkaran.classList.add('hidden');
            inputLuasPersegi.classList.add('hidden');
            inputLuasPersegiPanjang.classList.add('hidden');
            inputLuasJajarGenjang.classList.add('hidden');
    });

    btnLuasLingkaran.addEventListener('click', () => {
            inputLuasSegitiga.classList.add('hidden');
            inputLuasLingkaran.classList.remove('hidden');
            inputLuasPersegi.classList.add('hidden');
            inputLuasPersegiPanjang.classList.add('hidden');
            inputLuasJajarGenjang.classList.add('hidden');
    });

    btnLuasPersegi.addEventListener('click', () => {
            inputLuasSegitiga.classList.add('hidden');
            inputLuasLingkaran.classList.add('hidden');
            inputLuasPersegi.classList.remove('hidden');
            inputLuasPersegiPanjang.classList.add('hidden');
            inputLuasJajarGenjang.classList.add('hidden');
    });

    btnLuasPersegiPanjang.addEventListener('click', () => {
            inputLuasSegitiga.classList.add('hidden');
            inputLuasLingkaran.classList.add('hidden');
            inputLuasPersegi.classList.add('hidden');
            inputLuasPersegiPanjang.classList.remove('hidden');
            inputLuasJajarGenjang.classList.add('hidden');
    });

    btnLuasJajarGenjang.addEventListener('click', () => {
            inputLuasSegitiga.classList.add('hidden');
            inputLuasLingkaran.classList.add('hidden');
            inputLuasPersegi.classList.add('hidden');
            inputLuasPersegiPanjang.classList.add('hidden');
            inputLuasJajarGenjang.classList.remove('hidden');
    });    

    // tombol volume
    const bttonVolumeSegitiga = document.getElementById('bttonVolumeSegitiga');
    const bttonVolumeBola = document.getElementById('bttonVolumeBola');
    const bttonVolumeKubus = document.getElementById('bttonVolumeKubus');
    const bttonVolumeBalok = document.getElementById('bttonVolumeBalok');
    const bttonVolumeTrapesium = document.getElementById('bttonVolumeTrapesium');

    const volumeSegitiga = document.getElementById('volumeSegitiga');
    const volumeBola = document.getElementById('volumeBola');
    const volumeKubus = document.getElementById('volumeKubus');
    const volumeBalok = document.getElementById('volumeBalok');
    const volumeTrapesium = document.getElementById('volumeTrapesium');

    bttonVolumeSegitiga.addEventListener('click', () => {  
            volumeSegitiga.classList.remove('hidden');
            volumeBola.classList.add('hidden');
            volumeKubus.classList.add('hidden');
            volumeBalok.classList.add('hidden');
            volumeTrapesium.classList.add('hidden');
    });

    bttonVolumeBola.addEventListener('click', () => {
            volumeSegitiga.classList.add('hidden');
            volumeBola.classList.remove('hidden');
            volumeKubus.classList.add('hidden');
            volumeBalok.classList.add('hidden');
            volumeTrapesium.classList.add('hidden');
    });

    bttonVolumeKubus.addEventListener('click', () => {
            volumeSegitiga.classList.add('hidden');
            volumeBola.classList.add('hidden');
            volumeKubus.classList.remove('hidden');
            volumeBalok.classList.add('hidden');
            volumeTrapesium.classList.add('hidden');
    });

    bttonVolumeBalok.addEventListener('click', () => {
            volumeSegitiga.classList.add('hidden');
            volumeBola.classList.add('hidden');
            volumeKubus.classList.add('hidden');
            volumeBalok.classList.remove('hidden');
            volumeTrapesium.classList.add('hidden');
    });

    bttonVolumeTrapesium.addEventListener('click', () => {
            volumeSegitiga.classList.add('hidden');
            volumeBola.classList.add('hidden');
            volumeKubus.classList.add('hidden');
            volumeBalok.classList.add('hidden');
            volumeTrapesium.classList.remove('hidden');
    });

    // tombol keliling
    const bttnKelilingSegitiga = document.getElementById('bttnKelilingSegitiga');
    const bttnKelilingLingkaran = document.getElementById('bttnKelilingLingkaran');
    const bttnKelilingPersegi = document.getElementById('bttnKelilingPersegi');
    const bttnKelilingPersegiPanjang = document.getElementById('bttnKelilingPersegiPanjang');
    const bttnKelilingJajarGenjang = document.getElementById('bttnKelilingJajarGenjang');

    const KelilingSegitiga = document.getElementById('KelilingSegitiga');
    const KelilingLingkaran = document.getElementById('KelilingLingkaran');
    const KelilingPersegi = document.getElementById('KelilingPersegi');
    const KelilingPersegiPanjang = document.getElementById('KelilingPersegiPanjang');
    const KelilingJajarGenjang = document.getElementById('KelilingJajarGenjang');

    bttnKelilingSegitiga.addEventListener('click', () => {  
            KelilingSegitiga.classList.remove('hidden');
            KelilingLingkaran.classList.add('hidden');
            KelilingPersegi.classList.add('hidden');
            KelilingPersegiPanjang.classList.add('hidden');
            KelilingJajarGenjang.classList.add('hidden');
    });

    bttnKelilingLingkaran.addEventListener('click', () => {
            KelilingSegitiga.classList.add('hidden');
            KelilingLingkaran.classList.remove('hidden');
            KelilingPersegi.classList.add('hidden');
            KelilingPersegiPanjang.classList.add('hidden');
            KelilingJajarGenjang.classList.add('hidden');
    });

    bttnKelilingPersegi.addEventListener('click', () => {
            KelilingSegitiga.classList.add('hidden');
            KelilingLingkaran.classList.add('hidden');
            KelilingPersegi.classList.remove('hidden');
            KelilingPersegiPanjang.classList.add('hidden');
            KelilingJajarGenjang.classList.add('hidden');
    });

    bttnKelilingPersegiPanjang.addEventListener('click', () => {
            KelilingSegitiga.classList.add('hidden');
            KelilingLingkaran.classList.add('hidden');
            KelilingPersegi.classList.add('hidden');
            KelilingPersegiPanjang.classList.remove('hidden');
            KelilingJajarGenjang.classList.add('hidden');
    });

    bttnKelilingJajarGenjang.addEventListener('click', () => {
            KelilingSegitiga.classList.add('hidden');
            KelilingLingkaran.classList.add('hidden');
            KelilingPersegi.classList.add('hidden');
            KelilingPersegiPanjang.classList.add('hidden');
            KelilingJajarGenjang.classList.remove('hidden');
    });


    // tombol opsi
    const tombolLuas = document.getElementById('tombolLuas');
    const tombolKeliling = document.getElementById('tombolKeliling');
    const tombolVolume = document.getElementById('tombolVolume');

    const kalkulatorLuas = document.getElementById('kalkulatorLuas');
    const kalkulatorKeliling = document.getElementById('kalkulatorKeliling');
    const kalkulatorVolume = document.getElementById('kalkulatorVolume');
    const kontenUtama = document.getElementById('kontenUtama');

    tombolLuas.addEventListener('click', () => {
            kalkulatorLuas.classList.remove('hidden');
            kalkulatorKeliling.classList.add('hidden');
            kalkulatorVolume.classList.add('hidden');
            kontenUtama.classList.add('hidden');
    });

    tombolKeliling.addEventListener('click', () => {
            kalkulatorLuas.classList.add('hidden');
            kalkulatorKeliling.classList.remove('hidden');
            kalkulatorVolume.classList.add('hidden');
            kontenUtama.classList.add('hidden');
    });

    tombolVolume.addEventListener('click', () => {
            kalkulatorLuas.classList.add('hidden');
            kalkulatorKeliling.classList.add('hidden');
            kalkulatorVolume.classList.remove('hidden');
            kontenUtama.classList.add('hidden');
    });
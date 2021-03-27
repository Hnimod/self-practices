interface ISuperTivi {
  connectWifi: () => void;

  connectDigitalCable: () => void;

  connectUSB: () => void;
}

class KaraokeTivi implements ISuperTivi {
  connectWifi() {
    console.log('Browsing Youtube karaoke videos');
  }

  connectDigitalCable() {
    console.log('Digiatal cable not supported');
  }

  connectUSB() {
    console.log('Copy karaoke videos from USB');
  }
}

const karaokeTivi = new KaraokeTivi();
karaokeTivi.connectWifi();
karaokeTivi.connectDigitalCable();
karaokeTivi.connectUSB();

export {};

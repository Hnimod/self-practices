interface ISmartTivi {
  connectWifi: () => void;

  connectUSB: () => void;
}

interface IDigitalTivi {
  connectDigitalCable: () => void;
}

class KaraokeTivi implements ISmartTivi {
  connectWifi() {
    console.log('Browsing Youtube karaoke videos');
  }

  connectUSB() {
    console.log('Copy karaoke videos from USB');
  }
}

const karaokeTivi = new KaraokeTivi();
karaokeTivi.connectWifi();
karaokeTivi.connectUSB();

export {};

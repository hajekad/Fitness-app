package cz.minuty.app;

import com.getcapacitor.BridgeActivity;
import android.content.Context;
import android.os.Bundle;
import android.os.PowerManager;

public class MainActivity extends BridgeActivity {
  PowerManager.WakeLock wakeLock;

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    PowerManager powerManager = (PowerManager) getSystemService(Context.POWER_SERVICE);
    wakeLock = powerManager.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "MyApp::Background");
    wakeLock.acquire();
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
    if (wakeLock.isHeld()) {
      wakeLock.release();
    }
  }
}

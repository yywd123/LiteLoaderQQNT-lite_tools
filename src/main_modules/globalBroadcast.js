const { BrowserWindow } = require("electron");
// 向所有未销毁页面发送广播
function globalBroadcast(channel, data) {
  allWindows = BrowserWindow.getAllWindows();
  allWindows.forEach((window) => {
    if (!window.isDestroyed()) {
      window.webContents.send(channel, data);
    }
  });
}
module.exports = globalBroadcast;

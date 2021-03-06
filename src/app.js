var thermostat = new Thermostat();

var ThermoTempUpdate = function() {
  document.getElementById('thermostat').innerHTML = thermostat.temperature;
  if (thermostat.temperature <= 17) { document.getElementById('thermostat').style.color = "blue"; }
  if (thermostat.temperature >= 18) { document.getElementById('thermostat').style.color = "green"; }
  if (thermostat.temperature >= 26) { document.getElementById('thermostat').style.color = "orange"; }
  if (thermostat.temperature >= 30) { document.getElementById('thermostat').style.color = "red"; }
};

var ThermoAppRaise = function() {
  thermostat.raise();
  ThermoTempUpdate();
};

var ThermoAppLower = function() {
  thermostat.lower();
  ThermoTempUpdate();
};

var ThermoAppReset = function() {
  thermostat.resetButton();
  ThermoTempUpdate();
};

var ThermoAppPowerSavingToggle = function() {
  thermostat.powerSavingToggle();
  ThermoTempUpdate();
};

ThermoTempUpdate();
document.getElementById('raiseButton').onclick = ThermoAppRaise;
document.getElementById('lowerButton').onclick = ThermoAppLower;
document.getElementById('resetButton').onclick = ThermoAppReset;
document.getElementById('powerSaving').onchange = ThermoAppPowerSavingToggle;
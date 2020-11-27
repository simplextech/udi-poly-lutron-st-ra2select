# Configuring this node server
- Multiple Control systems connecting to a main repeater or bridge using the same username/password is not supported by Lutron and will cause the main repeater/bridge to lock down the connection requiring a time-out period of 15 minutes or power cycle!

## RA2 Select
- Default username and password are lutron/integration and are the defaults for the NodeServer.
- The Lutron Integration Protocol does not report status of Occupancy sensors for RA 2 Select.  Occupancy sensors added as devices will not report status.
- Pico remotes are the only keypad available for RA 2 Select.

## Shades
- Shades are experimental and may not function correctly.
- Need test equipment or testers

### Adding Devices
Devices are added by clicking the 'Add Lutron Devices' button.

#### Parameters to configure.
- Display Name in Admin Console
- Lutron Integration ID Number
- Device Type

# Device Type Mapping Information

If device type is not setup correctly the device will be created wrong or not at all.

## Device Types:
- Pico 2 Button                     | 4 
- Pico 2 Button Raise / Lower       | 5 
- Pico 3 Button                     | 6 
- Pico 3 Button Raise / Lower       | 7 
- Pico 4 Button                     | 8 
- Maestro / Caseta Switch           | 10 
- Maestro / Caseta Dimmer           | 11 
- Meastro / Caseta Fan Controller   | 12 
- Sivoia QS Wireless Shades         | 30 
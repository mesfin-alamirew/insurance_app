export const Questions = [
  {
    Id: 1,
    Question: 'Please selec a class you want to cover for.',

    Choices: [
      { Id: 2, Name: 'Private', ControlType: 'button' },
      { Id: 3, Name: 'Commercial', ControlType: 'button' },
      { Id: 4, Name: 'PSV', ControlType: 'button' },
    ],
    BtnNext: false,
  },

  {
    Id: 5,
    Question: 'What type of coverage do you want ?',

    Choices: [
      { Id: 6, Name: 'Comprehensive', ControlType: 'button' },
      { Id: 7, Name: '3rd Party', ControlType: 'button' },
    ],
    BtnNext: false,
  },
  {
    Id: 8,
    Question: 'Please selec what you want to insure',

    Choices: [
      { Id: 9, Name: 'Fleet', ControlType: 'button' },
      { Id: 10, Name: 'Single Vehicle', ControlType: 'button' },
      { Id: 11, Name: 'Motor Cycle', ControlType: 'button' },
    ],
    BtnNext: false,
  },
  {
    Id: 12,
    Question: 'What you want to cover for?',

    Choices: [
      { Id: 13, Name: 'Own Goods', ControlType: 'button' },
      { Id: 14, Name: 'Prime Mover', ControlType: 'button' },
      { Id: 15, Name: 'General Cortage', ControlType: 'button' },
      { Id: 16, Name: 'Tractor', ControlType: 'button' },
      { Id: 17, Name: 'Prime Mover', ControlType: 'button' },
      { Id: 18, Name: 'General Cortage', ControlType: 'button' },
      { Id: 19, Name: 'General Cortage', ControlType: 'button' },
    ],
    BtnNext: false,
  },
  {
    Id: 20,
    Question: 'What is the tonnage of the vehicle?',

    Choices: [{ Id: 21, Name: 'Tonnage', ControlType: 'input' }],
    BtnNext: true,
  },
  {
    Id: 22,
    Question: 'How long is the cover?',

    Choices: [
      { Id: 23, Name: 'Anual', ControlType: 'button' },
      { Id: 24, Name: '1 Month', ControlType: 'button' },
    ],
    BtnNext: false,
  },

  {
    Id: 25,
    Question: 'What is the role of the vehicle?',

    Choices: [
      {
        Id: 26,
        Name: 'Anual',
        ControlType: 'dropdown',
        Options: [
          { Id: 27, OptionText: 'A' },
          { Id: 28, OptionText: 'B' },
        ],
      },
    ],
    BtnNext: true,
  },
  {
    Id: 29,
    Question: 'What is the model of the vehicle?',

    Choices: [
      {
        Id: 30,
        Name: 'Anual',
        ControlType: 'dropdown',
        Options: [
          { Id: 31, OptionText: 'C' },
          { Id: 32, OptionText: 'D' },
        ],
      },
    ],
    BtnNext: true,
  },
  {
    Id: 29,
    Question: 'Great! Which year was your vehicle manufactured?',

    Choices: [
      {
        Id: 30,
        Name: 'Anual',
        ControlType: 'datetime',
      },
    ],
    BtnNext: true,
  },
  {
    Id: 31,
    Question: 'What is the estimated price of the vehicle in Birr?',

    Choices: [{ Id: 32, Name: 'Estimated price', ControlType: 'input' }],
    BtnNext: true,
  },
  {
    Id: 33,
    Question: 'What is your vehicle Mileage in Kilometers?',

    Choices: [{ Id: 34, Name: 'Mileage', ControlType: 'input' }],
    BtnNext: true,
  },
  {
    Id: 35,
    Question: 'Which year was your driving lience issued?',

    Choices: [
      {
        Id: 36,
        Name: 'Anual',
        ControlType: 'dropdown',
        Options: [
          { Id: 2021, OptionText: '2021' },
          { Id: 2020, OptionText: '2020' },
          { Id: 2019, OptionText: '2019' },
          { Id: 2018, OptionText: '2018' },
          { Id: 2017, OptionText: '2017' },
          { Id: 2016, OptionText: '2016' },
          { Id: 2015, OptionText: '2015' },
          { Id: 2014, OptionText: '2014' },
          { Id: 2013, OptionText: '2013' },
          { Id: 2012, OptionText: '2012' },
          { Id: 2011, OptionText: '2011' },
          { Id: 2010, OptionText: '2010' },
        ],
      },
    ],
    BtnNext: true,
  },
  {
    Id: 37,
    Question: 'So far so good! What is the birth date of the driver?',

    Choices: [
      {
        Id: 30,
        Name: 'Anual',
        ControlType: 'datetime',
      },
    ],
    BtnNext: true,
  },
];

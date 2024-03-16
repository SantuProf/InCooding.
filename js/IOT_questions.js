// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does IoT stand for?",
    answer: "Internet of Things",
    options: [
      "Internet of Technology",
      "Internet of Telecommunications",
      "Internet of Things",
      "Internet of Trends"
    ]
  },
    {
    numb: 2,
    question: "Which of the following best describes the Internet of Things (IoT)?",
    answer: "A network of physical devices embedded with sensors and connected to the internet",
    options: [
      "A network of interconnected computers only",
      "A network of physical devices embedded with sensors and connected to the internet",
      "A network of virtual reality devices",
      "A network of satellites orbiting the Earth"
    ]
  },
    {
    numb: 3,
    question: "Which technology is commonly used for wireless communication in IoT devices?",
    answer: "Bluetooth",
    options: [
      "Bluetooth",
      "Ethernet",
      "USB",
      "HDMI"
    ]
  },
    {
    numb: 4,
    question: "Which of the following is NOT a typical application of IoT?",
    answer: "Weather forecasting",
    options: [
      "Smart Home Automation",
      "Fitness tracking devices",
      "Weather forecasting",
      "Industrial automation and control"
    ]
  },
    {
    numb: 5,
    question: "What does a sensor do in an IoT system?",
    answer: "It measures physical or environmental conditions and converts it into digital data",
    options: [
      "It connects devices to the internet",
      "It processes data collected from devices",
      "It measures physical or environmental conditions and converts it into digital data",
      "It controls the operations of IoT devices"
    ]
  },
    {
    numb: 6,
    question: "Which of the following is an example of a wearable IoT device?",
    answer: "Fitness tracker",
    options: [
      "Smart refrigerator",
      "Smart thermostat",
      "Fitness tracker",
      "Smart light bulb"
    ]
  },
    {
    numb: 7,
    question: "What is a common protocol used for communication between IoT devices and the cloud?",
    answer: "MQTT",
    options: [
      "HTTP",
      "FTP",
      "SMTP",
      "MQTT"
    ]
  },
    {
    numb: 8,
    question: "Which of the following is a benefit of using IoT in agriculture?",
    answer: "Improved crop monitoring and management",
    options: [
      "Increased water and resource wastage",
      "Reduced crop yields",
      "Improved crop monitoring and management",
      "Higher energy consumption"
    ]
  },
    {
    numb: 9,
    question: "Which industry commonly utilizes IoT for asset tracking and inventory management?",
    answer: "Retail",
    options: [
      "Healthcare",
      "Retail",
      "Education",
      "Entertainment"
    ]
  },
    {
    numb: 10,
    question: "What is the primary purpose of implementing IoT in smart cities?",
    answer: "To reduce energy consumption",
    options: [
      "To increase traffic congestion",
      "To reduce energy consumption",
      "To decrease air pollution",
      "To limit access to public services"
    ]
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
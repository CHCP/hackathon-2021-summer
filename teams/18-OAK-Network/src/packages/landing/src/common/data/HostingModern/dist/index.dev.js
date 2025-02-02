"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.faqs = exports.newsFeed = exports.testimonials = exports.pricingInfo = exports.features = exports.accordions = exports.Services = exports.MenuItems = void 0;

var _ = _interopRequireDefault(require("common/assets/image/hostingModern/features/1.png"));

var _2 = _interopRequireDefault(require("common/assets/image/hostingModern/features/2.png"));

var _3 = _interopRequireDefault(require("common/assets/image/hostingModern/features/3.png"));

var _4 = _interopRequireDefault(require("common/assets/image/hostingModern/features/4.png"));

var _5 = _interopRequireDefault(require("common/assets/image/hostingModern/features/5.png"));

var _6 = _interopRequireDefault(require("common/assets/image/hostingModern/features/6.png"));

var _author = _interopRequireDefault(require("common/assets/image/hostingModern/author1.png"));

var _news = _interopRequireDefault(require("common/assets/image/hostingModern/news1.png"));

var _news2 = _interopRequireDefault(require("common/assets/image/hostingModern/news2.png"));

var _news3 = _interopRequireDefault(require("common/assets/image/hostingModern/news3.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MenuItems = [{
  label: 'Home',
  path: '#home',
  offset: '70'
}, {
  label: 'Services',
  path: '#services',
  offset: '70'
}, {
  label: 'Features',
  path: '#features',
  offset: 20
}, {
  label: 'Pricing',
  path: '#pricing',
  offset: '70'
}, {
  label: 'Testimonials',
  path: '#testimonials',
  offset: '70'
}, {
  label: 'News',
  path: '#news',
  offset: '70'
}, {
  label: 'Faq',
  path: '#faq',
  offset: '70'
}, {
  label: 'Login',
  path: '#',
  offset: '70'
}];
exports.MenuItems = MenuItems;
var Services = [{
  id: 1,
  title: 'Cloud Hosting',
  price: '$0.63/mo'
}, {
  id: 2,
  title: 'Web Hosting',
  price: '$0.75/mo'
}, {
  id: 3,
  title: 'VPS Hosting',
  price: '$0.68/mo'
}, {
  id: 4,
  title: 'WordPress Hosting',
  price: '$0.72/mo'
}, {
  id: 5,
  title: 'Domains',
  price: '$0.75/mo'
}, {
  id: 6,
  title: 'Email Hosting',
  price: '$0.56/mo'
}, {
  id: 7,
  title: 'VPN Service',
  price: '$0.69/mo'
}, {
  id: 8,
  title: 'Image Cloud',
  price: '$0.75/mo'
}];
exports.Services = Services;
var accordions = [{
  id: 1,
  expanded: true,
  title: 'Organize your project content',
  desc: 'Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.'
}, {
  id: 2,
  expanded: false,
  title: 'Collaborate your multiple team support easily',
  desc: 'Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.'
}, {
  id: 3,
  expanded: false,
  title: "Build your team's knowledge base system",
  desc: 'Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.'
}];
exports.accordions = accordions;
var features = [{
  id: 1,
  icon: _["default"],
  title: 'ultimate Email  subscription',
  desc: 'Get your info tests delivered at home collect a sample from the your task.'
}, {
  id: 2,
  icon: _2["default"],
  title: 'Bolt Performance',
  desc: 'Get your info tests delivered at home collect a sample from the your task.'
}, {
  id: 3,
  icon: _3["default"],
  title: 'Secure Transaction',
  desc: 'Get your info tests delivered at home collect a sample from the your task.'
}, {
  id: 4,
  icon: _4["default"],
  title: 'Multiple Options',
  desc: 'Get your info tests delivered at home collect a sample from the your task.'
}, {
  id: 5,
  icon: _5["default"],
  title: '5 Star Rating service',
  desc: 'Get your info tests delivered at home collect a sample from the your task.'
}, {
  id: 6,
  icon: _6["default"],
  title: 'Integrated with Shopify',
  desc: 'Get your info tests delivered at home collect a sample from the your task.'
}];
exports.features = features;
var pricingInfo = [{
  id: 1,
  title: 'Startup Pack',
  desc: 'For the startup team who work with new come data stack',
  price: 25.99,
  buttonText: 'Start Free Trial',
  isRecommended: false,
  features: [{
    id: 1,
    name: 'Ultimate access to all course, exercises and assessments',
    isDisabled: false
  }, {
    id: 2,
    name: 'Free access for all kind of exercise corrections with downloads.',
    isDisabled: false
  }, {
    id: 3,
    name: 'Total assessment corrections with free download access system',
    isDisabled: false
  }, {
    id: 4,
    name: 'Unlimited download of courses on the mobile app contents',
    isDisabled: true
  }]
}, {
  id: 2,
  title: 'Premium Pack',
  desc: 'For the organization who work with new come data stack',
  price: 29.99,
  buttonText: 'Start Free Trial',
  isRecommended: true,
  features: [{
    id: 1,
    name: 'Ultimate access to all course, exercises and assessments',
    isDisabled: false
  }, {
    id: 2,
    name: 'Free acess for all kind of exercise corrections with downloads.',
    isDisabled: false
  }, {
    id: 3,
    name: 'Total assessment corrections with free download access system',
    isDisabled: false
  }, {
    id: 4,
    name: 'Unlimited download of courses on the mobile app contents',
    isDisabled: false
  }]
}, {
  id: 3,
  title: 'Ultimate Pack',
  desc: 'For the organization who work with new come data stack',
  price: 34.99,
  buttonText: 'Start Free Trial',
  isRecommended: false,
  features: [{
    id: 1,
    name: 'Ultimate access to all course, exercises and assessments',
    isDisabled: false
  }, {
    id: 2,
    name: 'Free acess for all kind of exercise corrections with downloads.',
    isDisabled: false
  }, {
    id: 3,
    name: 'Total assessment corrections with free download access system',
    isDisabled: false
  }, {
    id: 4,
    name: 'Unlimited download of courses on the mobile app contents',
    isDisabled: false
  }]
}];
exports.pricingInfo = pricingInfo;
var testimonials = [{
  id: 1,
  image: _author["default"],
  name: 'Melina Pettendorfer',
  designation: 'CEO of Uber',
  quote: "Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services"
}, {
  id: 2,
  image: _author["default"],
  name: 'Kelsi Gordon',
  designation: 'Insurance Broker',
  quote: 'My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business'
}, {
  id: 3,
  image: _author["default"],
  name: 'Tasha Zuzalek',
  designation: 'Facebook Project Manager',
  quote: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team."
}];
exports.testimonials = testimonials;
var newsFeed = [{
  id: 1,
  image: _news["default"],
  title: 'Learn from how to host your site',
  excerpt: 'Brian Halligan knows that you need more than a great product to have a great brand with new features.',
  link: '#'
}, {
  id: 2,
  image: _news2["default"],
  title: 'Customize your domain hosting',
  excerpt: 'Brian Halligan knows that you need more than a great product to have a great brand with new features.',
  link: '#'
}, {
  id: 3,
  image: _news3["default"],
  title: 'Learn how to upload on cloud host',
  excerpt: 'Brian Halligan knows that you need more than a great product to have a great brand with new features.',
  link: '#'
}];
exports.newsFeed = newsFeed;
var faqs = [{
  id: 1,
  title: 'Which domain should I purchase?',
  desc: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result"
}, {
  id: 4,
  title: 'Can I upgrade or downgrade my web hosting plan',
  desc: "The pricing made me a little hesitant at first but I have been pleasantly surprised by the level of care given by CometNine."
}, {
  id: 2,
  title: 'What are some tips when choosing a name?',
  desc: "Get your website tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news."
}, {
  id: 5,
  title: 'How do I upgrade the storage capacity of my hosting plan?',
  desc: "Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won\u2019t be annoyed by ads or pulled down a rabbit hole of unrelated videos."
}, {
  id: 3,
  title: 'What if I need help choosing the right domain?',
  desc: "Create a hub for cross-functional work that also works with all your other tools. Centralize and standardize communication with Miro. All premium functional are included here with updates."
}, {
  id: 6,
  title: 'What is in InMotion Hosting’s uptime rate?',
  desc: "Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install"
}, {
  id: 7,
  title: 'Learn from community on Brandwagon',
  desc: "Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon."
}];
exports.faqs = faqs;
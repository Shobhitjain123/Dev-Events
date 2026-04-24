export interface Event {
  image: string;
  location: string;
  title: string;
  slug: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    image: '/images/event1.png',
    location: 'San Francisco, CA',
    title: 'React Summit 2024',
    slug: 'react-summit-2024',
    date: 'June 15-16, 2024',
    time: '9:00 AM - 6:00 PM'
  },
  {
    image: '/images/event2.png',
    location: 'New York, NY',
    title: 'Web3 Hackathon',
    slug: 'web3-hackathon-2024',
    date: 'July 8-9, 2024',
    time: '10:00 AM - 10:00 PM'
  },
  {
    image: '/images/event3.png',
    location: 'Austin, TX',
    title: 'AI & Machine Learning Meetup',
    slug: 'ai-ml-meetup-2024',
    date: 'July 20, 2024',
    time: '6:00 PM - 9:00 PM'
  },
  {
    image: '/images/event4.png',
    location: 'Seattle, WA',
    title: 'DevOps Conference 2024',
    slug: 'devops-conference-2024',
    date: 'August 5-7, 2024',
    time: '8:30 AM - 5:30 PM'
  },
  {
    image: '/images/event5.png',
    location: 'Los Angeles, CA',
    title: 'Mobile Dev Summit',
    slug: 'mobile-dev-summit-2024',
    date: 'August 22-23, 2024',
    time: '9:00 AM - 6:00 PM'
  },
  {
    image: '/images/event6.png',
    location: 'Denver, CO',
    title: 'JavaScript Workshop',
    slug: 'js-workshop-2024',
    date: 'September 10, 2024',
    time: '10:00 AM - 4:00 PM'
  },
  {
    image: '/images/event-full.png',
    location: 'Boston, MA',
    title: 'Cloud Native Hackathon',
    slug: 'cloud-native-hackathon-2024',
    date: 'September 28-29, 2024',
    time: '9:00 AM - 9:00 PM'
  },
  {
    image: '/images/event1.png',
    location: 'Portland, OR',
    title: 'Frontend Masters Conference',
    slug: 'frontend-masters-2024',
    date: 'October 12-13, 2024',
    time: '8:30 AM - 5:30 PM'
  }
];

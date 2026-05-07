import { BotMessageSquare, Fingerprint, ShieldHalf, BatteryCharging, PlugZap, GlobeLock, Component, Users, User, Mail, MessageSquare, Phone } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: "/images/testimonials/user1.jpg",
    text: "I am extremely satisfied with the services provided. The team was professional, and the results were delivered on time.",
  },
  {
    user: "Jane Smith",
    company: "BlueWave Technologies",
    image: "/images/testimonials/user2.jpg",
    text: "The team went above and beyond to meet our needs. I would highly recommend them to anyone looking for quality services.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: "/images/testimonials/user3.jpg",
    text: "Working with this company was a pleasure. The team was responsive, and the results were excellent.",
  },
    {
    user: "Emily Williams",
    company: "Visionary Creations",
    image: "/images/testimonials/user1.jpg",
    text: "The team was knowledgeable and experienced, and they were able to deliver a high-quality product on time and within budget.",
  },
  {
    user: "Michael Brown",
    company: "Apex Digital",
    image: "/images/testimonials/user2.jpg",
    text: "I was impressed with the team's attention to detail and their commitment to delivering a high-quality product.",
  },
  {
    user: "Sarah Davis",
    company: "NextGen Systems",
    image: "/images/testimonials/user3.jpg",
    text: "The team was a pleasure to work with, and I would not hesitate to recommend them to anyone looking for a reliable and trustworthy partner.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Web Development",
    description:
      "We build responsive and scalable web applications tailored to your business needs, from simple landing pages to complex e-commerce platforms.",
  },
  {
    icon: <Fingerprint />,
    text: "Mobile App Development",
    description:
      "We create beautiful and intuitive mobile apps for both iOS and Android, helping you reach your customers on their favorite devices.",
  },
  {
    icon: <ShieldHalf />,
    text: "Blockchain Technology",
    description:
      "We provide expert consulting and development services for decentralized applications, smart contracts, and other blockchain-based solutions.",
  },
  {
    icon: <BatteryCharging />,
    text: "AI & Machine Learning",
    description:
      "Leverage the power of AI and machine learning to automate processes, gain insights from your data, and create intelligent applications.",
  },
  {
    icon: <PlugZap />,
    text: "DevOps & Cloud",
    description:
      "We help you streamline your development and deployment processes with our DevOps and cloud computing services, ensuring reliability and scalability.",
  },
  {
    icon: <GlobeLock />,
    text: "Cybersecurity",
    description:
      "Protect your digital assets with our comprehensive cybersecurity services, including vulnerability assessments, penetration testing, and threat intelligence.",
  },
];

export const checklistItems = [
  {
    title: "Initial Consultation and Needs Assessment",
    description:
      "We start by understanding your business goals and requirements, conducting a thorough analysis of your needs to tailor the perfect solution.",
  },
  {
    title: "Strategic Planning and Proposal",
    description:
      "Based on our findings, we develop a strategic plan and a detailed proposal outlining the project scope, timeline, and deliverables.",
  },
  {
    title: "Design and Development",
    description:
      "Our team of experts gets to work, designing and developing your solution with the latest technologies and best practices.",
  },
  {
    title: "Testing, Deployment, and Support",
    description:
      "We rigorously test the solution to ensure it meets our quality standards, then deploy it and provide ongoing support and maintenance.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$19",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$99",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const about = {
  team: [
    {
      name: "Ghanish Baghel",
      title: "Marketing Head",
      image: "/images/testimonials/user3.jpg",
      social: {
        twitter: "https://twitter.com/emilywilliams",
        linkedin: "https://www.linkedin.com/in/emilywilliams",
        github: "https://github.com/emilywilliams"
      },
    },
    {
      name: "Ratnesh Kumar",
      title: "AI/ML Engineer",
      image: "/images/team/user4.jpg",
      social: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        github: "https://github.com/johndoe"
      },
    },
    {
      name: "Dheeraj Kumar",
      title: "Blockchain Developer",
      image: "/images/team/user4.jpg",
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        github: "https://github.com/janesmith"
      },
    },
     {
      name: "Shekhar Sharma",
      title: "IOT Engineer",
      image: "/images/team/user4.jpg",
      social: {
        twitter: "https://twitter.com/michaelbrown",
        linkedin: "https://www.linkedin.com/in/michaelbrown",
        github: "https://github.com/michaelbrown"
      },
    },
    {
      name: "Amit Kumar",
      title: "Graphic Designer",
      image: "/images/team/user4.jpg",
      social: {
        twitter: "https://twitter.com/sarahdavis",
        linkedin: "https://www.linkedin.com/in/sarahdavis",
        github: "https://github.com/sarahdavis"
      },
    },
    {
      name: "Puneet Kumar",
      title: "Web Developer",
      image: "/images/team/user4.jpg",
      social: {
        twitter: "https://twitter.com/davidjohnson",
        linkedin: "https://www.linkedin.com/in/davidjohnson",
        github: "https://github.com/davidjohnson"
      },
    },
    {
      name: "Ritu Chaudhary",
      title: "QA Engineer",
      image: "/images/team/user4.jpg",
      social: {
        twitter: "https://twitter.com/emilywilliams",
        linkedin: "https://www.linkedin.com/in/emilywilliams",
        github: "https://github.com/emilywilliams"
      },
    },
    {
      name: "Aman Tiwari",
      title: "Web Developer",
      image: "/images/team/user4.jpg",
      social: {
        twitter: "https://twitter.com/davidjohnson",
        linkedin: "https://www.linkedin.com/in/davidjohnson",
        github: "https://github.com/davidjohnson"
      },
    },
  ],
  mission: "Our mission is to empower businesses with innovative technology solutions, driving growth and success in the digital age. We are committed to delivering excellence and building long-lasting partnerships with our clients.",
  vision: "Our vision is to be a global leader in technology and innovation, creating a better future for businesses and society. We strive to be a trusted partner for our clients, delivering cutting-edge solutions that transform industries and drive positive change.",
};

export const services = [
  {
    icon: <BotMessageSquare />,
    text: "Web Development",
    description: "We build responsive and scalable web applications tailored to your business needs, from simple landing pages to complex e-commerce platforms.",
  },
  {
    icon: <Fingerprint />,
    text: "Mobile App Development",
    description: "We create beautiful and intuitive mobile apps for both iOS and Android, helping you reach your customers on their favorite devices.",
  },
    {
    icon: <ShieldHalf />,
    text: "UI/UX Design",
    description: "We design user-centric interfaces that are both aesthetically pleasing and easy to use, ensuring a seamless user experience.",
  },
  {
    icon: <BatteryCharging />,
    text: "Blockchain Technology",
    description: "We provide expert consulting and development services for decentralized applications, smart contracts, and other blockchain-based solutions.",
  },
    {
    icon: <PlugZap />,
    text: "AI & Machine Learning",
    description: "Leverage the power of AI and machine learning to automate processes, gain insights from your data, and create intelligent applications.",
  },
  {
    icon: <GlobeLock />,
    text: "DevOps & Cloud",
    description: "We help you streamline your development and deployment processes with our DevOps and cloud computing services, ensuring reliability and scalability.",
  },
    {
    icon: <Component />,
    text: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive cybersecurity services, including vulnerability assessments, penetration testing, and threat intelligence.",
  },
  {
    icon: <Users />,
    text: "IT Consulting",
    description: "Our expert consultants provide strategic guidance and support to help you navigate the complexities of the digital landscape and make informed decisions.",
  },
];

export const contact = {
  form: [
    {
      label: "Name",
      type: "text",
      placeholder: "Your Name",
       icon: <User />
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Your Email",
        icon: <Mail />
    },
    {
        label: "Message",
        type: "textarea",
        placeholder: "Your Message",
        icon: <MessageSquare />
    },
  ],
  info: [
    {
      title: "Phone",
      value: "+91 854 508 3648",
      icon: <Phone />
    },
    {
      title: "Email",
      value: "oticalmail@gmail.com",
      icon: <Mail />

    },
  ],
};

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const projects = [
    {
        title: "UdaratvaLogo",
        image: "/images/clients/UdaratvaLogo.png",
        category: "UI/UX Design",
    },  
    {
        title: "PSPower",
        image: "/images/clients/PSPower.png",
        category: "Blockchain Technology",
    },
    {
      title: "PetMets",
      image: "/images/clients/PetMets.png",
      category: "Web & App Development",
    },
    {
      title: "RanakEnergy",
      image: "/images/clients/RanakEnergy.png",
      category: "Mobile App Development",
    },
    {
        title: "BookDesigner",
        image: "/images/clients/BookDesigner.png",
        category: "Mobile App Development",
    },
    {
        title: "DekhoTo",
        image: "/images/clients/DekhoTo.png",
        category: "UI/UX Design",
    },
    {
        title: "ErDR",
        image: "/images/clients/ErDR.png",
        category: "Blockchain Technology",
    },
    {
        title: "Erweitern",
        image: "/images/clients/Erweitern.png",
        category: "Web Development",
    },
    {
        title: "EuNext",
        image: "/images/clients/EuNext.png",
        category: "Mobile App Development",
    },
    {
        title: "GangwarErDr",
        image: "/images/clients/GangwarErDr.png",
        category: "UI/UX Design",
    },
    {
        title: "GrowthFreak",
        image: "/images/clients/GrowthFreak.png",
        category: "Blockchain Technology",
    },
    {
      title: "BlackBird",
      image: "/images/clients/BlackBird.png",
      category: "Web Development",
  },
    {
        title: "Guruphoria",
        image: "/images/clients/Guruphoria.png",
        category: "Web Development",
    },
    {
        title: "Inventeno",
        image: "/images/clients/Inventeno.png",
        category: "Mobile App Development",
    },
    {
        title: "KasayaSpices",
        image: "/images/clients/KasayaSpices.png",
        category: "UI/UX Design",
    },
    {
        title: "MMP",
        image: "/images/clients/MMP.png",
        category: "Blockchain Technology",
    },
    {
        title: "MindPick",
        image: "/images/clients/MindPick.png",
        category: "Web Development",
    },
    {
        title: "Mohak",
        image: "/images/clients/Mohak.png",
        category: "Mobile App Development",
    },
    {
        title: "RecCloth",
        image: "/images/clients/RecCloth.png",
        category: "UI/UX Design",
    },
    {
        title: "Renere",
        image: "/images/clients/Renere.png",
        category: "Blockchain Technology",
    },
    {
        title: "SahajSahyog",
        image: "/images/clients/SahajSahyog.png",
        category: "Web Development",
    },
    {
        title: "SiddharthaEarthMovers",
        image: "/images/clients/SiddharthaEarthMovers.png",
        category: "Mobile App Development",
    },
    {
        title: "Vertex",
        image: "/images/clients/Vertex.png",
        category: "Blockchain Technology",
    },
    {
        title: "Vragger",
        image: "/images/clients/Vragger.png",
        category: "Web Development",
    },
];

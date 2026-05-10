import { BotMessageSquare, Fingerprint, ShieldHalf, BatteryCharging, PlugZap, GlobeLock, Component, Users, User, Mail, MessageSquare, Phone } from "lucide-react";

export const services = [
  {
    icon: <BotMessageSquare />,
    text: "Web Development",
    href: "/services/web-development",
    description: "We build responsive and scalable web applications tailored to your business needs, from simple landing pages to complex e-commerce platforms.",
  },
  {
    icon: <Fingerprint />,
    text: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "We create beautiful and intuitive mobile apps for both iOS and Android, helping you reach your customers on their favorite devices.",
  },
    {
    icon: <ShieldHalf />,
    text: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "We design user-centric interfaces that are both aesthetically pleasing and easy to use, ensuring a seamless user experience.",
  },
  {
    icon: <BatteryCharging />,
    text: "Blockchain Technology",
    href: "/services/blockchain-technology",
    description: "We provide expert consulting and development services for decentralized applications, smart contracts, and other blockchain-based solutions.",
  },
    {
    icon: <PlugZap />,
    text: "AI & Machine Learning",
    href: "/services/ai-machine-learning",
    description: "Leverage the power of AI and machine learning to automate processes, gain insights from your data, and create intelligent applications.",
  },
  {
    icon: <GlobeLock />,
    text: "DevOps & Cloud",
    href: "/services/devops-cloud",
    description: "We help you streamline your development and deployment processes with our DevOps and cloud computing services, ensuring reliability and scalability.",
  },
    {
    icon: <Component />,
    text: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Protect your digital assets with our comprehensive cybersecurity services, including vulnerability assessments, penetration testing, and threat intelligence.",
  },
  {
    icon: <Users />,
    text: "IT Consulting",
    href: "/services/it-consulting",
    description: "Our expert consultants provide strategic guidance and support to help you navigate the complexities of the digital landscape and make informed decisions.",
  },
  {
    icon: <Component />,
    text: "IOT Projects",
    href: "/services/iot-projects",
    description: "We design and build custom IOT solutions to connect and automate your devices, enabling data collection and remote control for a variety of applications.",
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map(service => ({ label: service.text, href: service.href }))
  },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const testimonials = [
  {
    user: "Pankaj Sharma",
    company: "Udaratva",
    image: "/logo.png",
    text: "I am extremely satisfied with the services provided. The team was professional, and the results were delivered on time.",
  },
  {
    user: "Sushil Mishra",
    company: "Ranak Energy",
    image: "/logo.png",
    text: "The team went above and beyond to meet our needs. I would highly recommend them to anyone looking for quality services.",
  },
  {
    user: "Vishal Singh",
    company: "MMP",
    image: "/logo.png",
    text: "Working with this company was a pleasure. The team was responsive, and the results were excellent & on time.",
  },
    {
    user: "Amir Khan",
    company: "DekhoTo",
    image:"/logo.png",
    text: "The team was knowledgeable and experienced, and they were able to deliver a high-quality product on time and within budget.",
  },
  {
    user: "Abhishek Singh",
    company: "BookDesigner",
    image: "/logo.png",
    text: "I was impressed with the team's attention to detail and their commitment to delivering a high-quality product.",
  },
  {
    user: "Shahsi Singh",
    company: "Mohak",
    image:"/logo.png",
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
      image: "/images/team/ghanisht.jpg",
      social: {
        twitter: "https://www.linkedin.com/in/ghanist-baghel",
        linkedin: "hhttps://www.linkedin.com/in/ghanist-baghel",
        github: "https://www.linkedin.com/in/ghanist-baghel"
      },
    },
    {
      name: "Ratnesh Kumar",
      title: "AI/ML Engineer",
      image: "/images/team/ratnesh.jpg",
      social: {
        twitter: "https://www.linkedin.com/in/kratnesh",
        linkedin: "https://www.linkedin.com/in/kratnesh",
        github: "https://www.linkedin.com/in/kratnesh"
      },
    },
    {
      name: "Dheeraj Kumar",
      title: "Blockchain Developer",
      image: "/images/team/dheeraj.jpg",
      social: {
        twitter: "https://www.linkedin.com/in/dheeraj-kumar-a8b532170",
        linkedin: "https://www.linkedin.com/in/dheeraj-kumar-a8b532170",
        github: "https://www.linkedin.com/in/dheeraj-kumar-a8b532170"
      },
    },
     {
      name: "Shekhar Sharma",
      title: "IOT Engineer",
      image: "/images/team/shekhar.jpg",
      social: {
        twitter: "https://www.linkedin.com/in/sharmashekharr",
        linkedin: "https://www.linkedin.com/in/sharmashekharr",
        github: "https://www.linkedin.com/in/sharmashekharr"
      },
    },
    {
      name: "Amit Kumar",
      title: "Graphic Designer",
      image: "/images/team/amit.png",
      social: {
        twitter: "https://www.linkedin.com/company/oticalofficial",
        linkedin: "https://www.linkedin.com/company/oticalofficial",
        github: "https://www.linkedin.com/company/oticalofficial"
      },
    },
    {
      name: "Puneet Kumar",
      title: "Web Developer",
      image: "/images/team/puneet.jpg",
      social: {
        twitter: "https://www.linkedin.com/in/puneetshivaay",
        linkedin: "https://www.linkedin.com/in/puneetshivaay",
        github: "https://www.linkedin.com/in/puneetshivaay"
      },
    },
    {
      name: "Ritu Chaudhary",
      title: "QA Engineer",
      image: "/images/team/ritu.png",
      social: {
        twitter: "https://www.linkedin.com/in/rituchaudharyqa",
        linkedin: "https://www.linkedin.com/in/rituchaudharyqa",
        github: "https://www.linkedin.com/in/rituchaudharyqa"
      },
    },
    {
      name: "Aman Tiwari",
      title: "Web Developer",
      image: "/images/team/aman.png",
      social: {
        twitter: "https://www.linkedin.com/in/aman-tiwari-dev/",
        linkedin: "https://www.linkedin.com/in/aman-tiwari-dev/",
        github: "https://www.linkedin.com/in/aman-tiwari-dev/"
      },
    },
    {
      name: "Pratibha",
      title: "UI Designer",
      image: "/images/team/pratibha.jpg",
      social: {
        twitter: "https://www.linkedin.com/in/pratibha-kanaujiya-6462b0234/",
        linkedin: "https://www.linkedin.com/in/pratibha-kanaujiya-6462b0234/",
        github: "https://www.linkedin.com/in/pratibha-kanaujiya-6462b0234/"
      },
    },
  ],
  mission: "Our mission is to empower businesses with innovative technology solutions, driving growth and success in the digital age. We are committed to delivering excellence and building long-lasting partnerships with our clients.",
  vision: "Our vision is to be a global leader in technology and innovation, creating a better future for businesses and society. We strive to be a trusted partner for our clients, delivering cutting-edge solutions that transform industries and drive positive change.",
};

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
        title: "Udaratva",
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

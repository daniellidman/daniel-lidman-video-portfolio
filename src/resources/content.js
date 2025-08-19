import { Logo } from '@once-ui-system/core';

const person = {
  firstName: 'Daniel',
  lastName: 'Lidman',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Video Editor and Animator',
  avatar: '/images/avatar.jpg',
  email: 'daniel@daniel-lidman.com',
  location: 'America/Chicago', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about video editing, motion design, technology, and
      share thoughts on the intersection of video creation and web development.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'Vimeo',
    icon: 'vimeo',
    link: 'https://vimeo.com/daniellidman/',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/daniellidman/',
  },
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/daniellidman",
  // },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Unleash your story in post production</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: '/work/building-once-ui-a-customizable-design-system',
  },
  subline: (
    <>
      I'm Daniel, a video editor and animator fusing creativity and emerging
      technology to craft unforgettable visual experiences.
    </>
  ),
};

const about = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        I’m a video editor and animator based in Nashville, TN. I have spent the
        last 9 years working with large scale non-profits, humanitarian
        campaigns to tell the stories of lives changed and social good in the
        world. Whether I'm crafting a documentary, multicam cutting a concert,
        or animating responsive graphics for a promo, I love creatively bringing
        people's stories and visions to life.
        <br></br>
        <br></br>
        Thanks for visiting my site. Looking forward to hearing from you!
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'Ramsey Solutions',
        timeframe: '2023 - Present',
        role: 'Senior Video Editor',
        achievements: [
          <>
            Produced 50+ high-quality videos annually for a YouTube audience of
            5M+, strengthening engagement and brand growth.
          </>,
          <>
            Created engaging advertisements, curriculum videos, and trailers
            that advanced company objectives and improved audience engagement.
          </>,
          <>
            Collaborated with producers, designers, and marketing teams to align
            creative execution with strategic goals.
          </>,
          <>
            Iterated projects through stakeholder feedback cycles, honing
            adaptability and precision.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: '/images/projects/project-01/cover-01.jpg',
          //   alt: 'Once UI Project',
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: 'Love Has No Limits',
        timeframe: '2016 - 2023',
        role: 'Video Editor',
        achievements: [
          <>
            Led video production for nine large-scale international and domestic
            humanitarian campaigns, producing 400+ videos that reached millions
            online and stadium audiences of 60,000+.
          </>,
          <>
            Directed the video department, overseeing 5+ interns and
            contractors, and led a $50,000 custom studio build-out,
            demonstrating technical leadership and project ownership.
          </>,
          <>
            Delivered high-profile content for The Freedom Experience featuring
            Justin Bieber & Chance the Rapper, managing high-pressure deadlines
            and complex production pipelines.
          </>,
          <>
            Partnered with executive leadership to shape messaging and digital
            storytelling.
          </>,
        ],
        images: [],
      },
      {
        company: 'Freelance',
        timeframe: '2018 - Present',
        role: 'Video Editor & Animator',
        achievements: [
          <>
            In addition to my full time job, I work with brands and agencies to
            bring their stories to life, managing projects from requirements to
            final delivery.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'Ferris State University',
        description: (
          <>Bachelor of Science in Television & Digital Media Production</>
        ),
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Next.js',
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: '/work',
  label: 'Work',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

// This file now dynamically loads data from db.json
// If you want to make changes, edit db.json and restart the development server

export const getProjectsData = async () => {
  try {
    // Try to fetch from JSON server first
    const response = await fetch('http://localhost:3001/projects');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log('JSON server not running, using fallback data');
  }

  // Fallback data (updated with correct links from db.json)
  return {
    major: [
      {
        id: 1,
        title: "Freelancers Poratal",
        description: "A dynamic JavaScript-based freelancer directory showcasing engineer profiles with availability status, skill highlights, and hourly rates. Features interactive profile cards, a fullscreen detailed view with navigation controls, and responsive UI rendering from structured data.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        image: "/freelacs.png",
        github: "https://github.com/AmitKumarPatel374/freelance-page.git",
        live: "https://freelance-fudge-98d149.netlify.app",
        category: "major"
      },
      {
        id: 2,
        title: "IPL Team Hub",
        description: "Stay updated with all IPL team details including player profiles, stats, and records.Check upcoming fixtures, results, and match highlights in one place.Your one-stop hub for everything IPL.",
        technologies: ["HTML5", "CSS3"],
        image: "/cricket.png",
        github: "https://github.com/AmitKumarPatel374/IPL-team-hub.git",
        live: "https://ipl-web-2024-by-amit.netlify.app/",
        category: "major"
      },
      {
        id: 3,
        title: "Olive Clone",
        description: "A practice project replicating the Olive website's design using HTML and Tailwind CSS. Built to improve Tailwind utility class skills and responsive layout techniques.Focuses purely on frontend styling without backend functionality.",
        technologies: ["HTML5", "Tailwind"],
        image: "/oliveclone.png",
        github: "https://github.com/AmitKumarPatel374/olive-clone.git",
        live: "https://olive-by-amit.netlify.app/",
        category: "major"
      },
      {
        id: 4,
        title: "Dribbble Clone",
        description: "A practice project replicating the Olive website's design using HTML and Tailwind CSS. Built to improve Tailwind utility class skills and responsive layout techniques.Focuses purely on frontend styling without backend functionality.",
        technologies: ["HTML5", "CSS3", "Tailwind"],
        image: "/dribble.png",
        github: "https://github.com/AmitKumarPatel374/Dribble-CLone.git",
        live: "https://dribble-by-amit.netlify.app/",
        category: "major"
      },
      {
        id: 5,
        title: "Tic Tac Toe GamePlay",
        description: "A two-player Tic Tac Toe game where players enter names, track wins and ties, and display the winner after each match.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
        image: "/tictoe.png",
        github: "https://github.com/AmitKumarPatel374/Tic-Tac-Toe.git",
        live: "https://tic-tak-toe-by-amit.netlify.app/",
        category: "major"
      },
      {
        id: 6,
        title: "Rock Paper Scissor GamePlay",
        description: "A single-player Rock Paper Scissors game where the user plays against the computer, and the winner is displayed after each round",
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
        image: "/rockpapersc.png",
        github: "https://github.com/AmitKumarPatel374/Rock-Paper-Scissors.git",
        live: "https://rok-paper-scissor-554e.netlify.app",
        category: "major"
      },
      {
        id: 7,
        title: "Multi Function Clock",
        description: "A multi-function clock system with a real-time clock, stopwatch, and customizable timer, allowing users to switch between modes, start/stop/reset each function, and view precise time updates.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
        image: "/watch.png",
        github: "https://github.com/AmitKumarPatel374/Multi-Function-Watch.git",
        live: "https://digital-watch-by-amit.netlify.app/",
        category: "major"
      },
      {
        id: 8,
        title: "Amazon.in Clone",
        description: "Amazon Clone where you can view manually added products, and clicking on them redirects to the real Amazon.com site.",
        technologies: ["HTML5", "CSS3"],
        image: "/amazonclone.png",
        github: "https://github.com/AmitKumarPatel374/amazon-clone.git",
        live: "https://amazon-by-amit.netlify.app/",
        category: "major"
      },
      {
        id: 9,
        title: "YouTube Colne",
        description: "YouTube Clone where you can view manually added videos, and clicking on them redirects to the real YouTube.com site.",
        technologies: ["HTML5", "CSS3"],
        image: "/youtubeClone.png",
        github: "https://github.com/AmitKumarPatel374/Youtube-Clone.git",
        live: "https://yt-clone-by-amit.netlify.app/",
        category: "major"
      },
      {
        id: 10,
        title: "JS Documentation",
        description: "JavaScript Documentation site with multiple interlinked pages for easy navigation between topics.",
        technologies: ["HTML5", "CSS3"],
        image: "/documentation.png",
        github: "https://github.com/AmitKumarPatel374/js-documentation.git",
        live: "https://js-documentation-760e1d.netlify.app",
        category: "major"
      },
      {
        id: 11,
        title: "Blog Web Page",
        description: "Blog web page showcasing manually created posts with categories/tags and interlinked article pages for easy navigation.",
        technologies: ["HTML5", "CSS3"],
        image: "/blog.png",
        github: "https://github.com/AmitKumarPatel374/Blog-web.git",
        live: "https://blog-web-70ea08.netlify.app",
        category: "major"
      }
    ],
    minor: [
      {
        id: 12,
        title: "Dr. A.P.J. Abdul Kalam Tribute Page",
        description: "A Tribute single page of Dr. A.P.J. Abdul Kalam (Missile Man of India).",
        technologies: ["HTML5", "CSS3"],
        image: "/tribute.png",
        github: "https://github.com/AmitKumarPatel374/kalam-tribute.git",
        live: "https://apj-tribute-3732ac.netlify.app",
        category: "minor"
      },
      {
        id: 13,
        title: "Job Appliction Form",
        description: "A simple Job Application Form That have inputs but dont have any backend support.",
        technologies: ["HTML5", "CSS3"],
        image: "/jobapplication.png",
        github: "https://github.com/AmitKumarPatel374/job-application-form-ui.git",
        live: "https://job-application-form-6614f1.netlify.app",
        category: "minor"
      },
      {
        id: 14,
        title: "A Parallax Site",
        description: "A Parallax site That have a Parallel Image changing effect where bg photo showing changr by sliding",
        technologies: ["HTML5", "CSS3"],
        image: "/parallax.png",
        github: "https://github.com/AmitKumarPatel374/Parallax-site.git",
        live: "https://parallax-by-amit.netlify.app/",
        category: "minor"
      },
      {
        id: 15,
        title: "A Landing Page",
        description: "A Landing Page of Full Stack Web Developer.",
        technologies: ["HTML5", "CSS3"],
        image: "/landing.png",
        github: "https://github.com/AmitKumarPatel374/Landing-Page.git",
        live: "https://cs-landing-page-584174.netlify.app",
        category: "minor"
      },
      {
        id: 16,
        title: "Foodie Version",
        description: "A rasturant site that conatain a menu with special item and it helps me to understanding grid model.",
        technologies: ["HTML5", "CSS3"],
        image: "/rastorant.png",
        github: "https://github.com/AmitKumarPatel374/foodie-version.git",
        live: "https://food-web-by-amit.netlify.app/",
        category: "minor"
      },
      {
        id: 17,
        title: "Guess IPL WInner Team",
        description: "A single page that have all teams of IPL but this is guessing page that which ipl team will win the match by clicking guess option.",
        technologies: ["HTML5", "CSS3","JavaScript"],
        image: "/random.png",
        github: "https://github.com/AmitKumarPatel374/Random-IPL-winner-tem.git",
        live: "https://random-winner-by-amit.netlify.app/",
        category: "minor"
      },
      {
        id: 18,
        title: "A Instagram Landing Page",
        description: "A sigle page that show how a post appear in our page give like option by double tap and also like button and story will appear for little time and automatically disspear",
        technologies: ["HTML5", "CSS3","JavaScript"],
        image: "/story.png",
        github: "https://github.com/AmitKumarPatel374/Instrgram-landing-page.git",
        live: "https://story-system-by-amit.netlify.app/",
        category: "minor"
      },
      {
        id: 19,
        title: "Custom Slider",
        description: "A singl page that some photos and we can slide photo in 4 direcion up down , left right  and comes diferrent photos.",
        technologies: ["HTML5", "CSS3","JavaScript"],
        image: "/custom.png",
        github: "https://github.com/AmitKumarPatel374/Custom-slider.git",
        live: "https://custom-slider-by-amit.netlify.app/",
        category: "minor"
      },
      {
        id: 20,
        title: "Downloader view",
        description: "A small page that show downloader form 0% to 100%.",
        technologies: ["HTML5", "CSS3","JavaScript"],
        image: "/download.png",
        github: "https://github.com/AmitKumarPatel374/Downloader-view.git",
        live: "https://download-by.netlify.app/",
        category: "minor"
      },
      {
        id: 21,
        title: "TO DO List",
        description: "A small To DO list Page where we can add our new task and also delete our previous tasks.",
        technologies: ["HTML5", "CSS3","JavaScript"],
        image: "/todolist.png",
        github: "https://github.com/AmitKumarPatel374/TO-DO-List.git",
        live: "https://todo-list-by-amitt.netlify.app/",
        category: "minor"
      },
      {
        id: 22,
        title: "Whether ForCasting",
        description: "A whether forcasting app where we can see where forcast of our city and it give soe of whether details.",
        technologies: ["HTML5", "CSS3","JavaScript"],
        image: "/whether.png",
        github: "https://github.com/AmitKumarPatel374/Whether-ForCasting.git",
        live: "https://whether-by-amit.netlify.app/",
        category: "minor"
      }
    ]
  };
};

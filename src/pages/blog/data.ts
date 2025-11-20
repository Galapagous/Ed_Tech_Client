import Image1 from '../../assets/image/pexels-brett-sayles-3970096.jpg';
import Image2 from '../../assets/image/pexels-cottonbro-6153738.jpg';
import Image3 from '../../assets/image/back2.jpeg';
import Image4 from '../../assets/image/pexels-rudonni-7174683.jpg';
import Image5 from '../../assets/image/pexels-ryutaro-6249821.jpg';
import Bg1 from '../../assets/image/brain.jpeg';
import Bg2 from '../../assets/image/brain2.jpeg';
import Bg3 from '../../assets/image/connect.jpeg';
import Bg4 from '../../assets/image/eye.jpeg';
import Post1 from '../../assets/image/Happy Independence Day Nigeria Design.jpeg';
import Post2 from '../../assets/image/Building Self Discipline and Self Control In Daily Life_ The Ultimate Guide - New Trader U.jpeg';
import Post3 from '../../assets/image/SA cash.jpeg';
import Post4 from '../../assets/image/Ghana’s ICT sector has seen significant growth….jpeg';
import Post5 from '../../assets/image/Male Professional Headshot - African American in a navy pinstripe suit with peaked lapels - subtl_.jpeg';
import Post6 from '../../assets/image/d9692f3c-c66a-4743-a293-48e8bff27a9d.jpeg';

export interface ISliderContent {
  id: number;
  title: string;
  category?: string;
  content: string;
  image: string;
}

export interface ICategory {
  id: number;
  label: string;
  img: string;
}

export const blogSlider: ISliderContent[] = [
  {
    id: 1,
    title: 'The Wolf of Wall Street',
    category: 'Movie',
    content:
      'Leonardo DiCaprio’s electrifying portrayal of Jordan Belfort reminds us how ambition and excess can drive success — and destruction. A masterclass in persuasion and chaos.',
    image: Image1,
  },
  {
    id: 2,
    title: 'The Rise of AI in Hollywood',
    category: 'Movie',
    content:
      'From scriptwriting to visual effects, artificial intelligence is quietly reshaping how movies are made. But where do we draw the line between creativity and code?',
    image: Image2,
  },
  {
    id: 3,
    title: 'The Psychology of Great Storytelling',
    category: 'Movie',
    content:
      'Every unforgettable film shares one thing — emotional truth. Dive into how filmmakers use psychology to craft stories that stay with us long after the credits roll.',
    image: Image3,
  },
  {
    id: 4,
    title: 'Behind the Camera: Crafting Cinematic Moments',
    category: 'Movie',
    content:
      'Great cinematography is more than beautiful shots — it’s storytelling through light and movement. Discover how directors of photography bring scripts to life.',
    image: Image4,
  },
  {
    id: 5,
    title: 'From Script to Screen: The Journey of a Film',
    category: 'academy',
    content:
      'What starts as an idea on a page travels through countless hands before lighting up the big screen. Explore the production process that makes movie magic possible.',
    image: Image5,
  },
];

export const categories: ICategory[] = [
  {
    id: 1,
    label: 'Sport',
    img: Bg1,
  },
  {
    id: 2,
    label: 'Technology',
    img: Bg2,
  },
  {
    id: 3,
    label: 'Entertainment',
    img: Bg3,
  },
  {
    id: 4,
    label: 'Politics',
    img: Bg4,
  },
];

export const topPost = [
  {
    id: 1,
    title: 'Peaceful coexistence in nigeria',
    category: 'Food',
    date: 'Nov 01 2023',
  },
  {
    id: 2,
    title: 'The price of desire',
    category: 'Psychology',
    date: 'Nov 10 2024',
  },
  {
    id: 3,
    title: 'The top one percent in anything in the world',
    category: 'Psychology',
    date: 'Nov 10 2025',
  },
  {
    id: 4,
    title: 'Lesson from chikwemerije statement on state of governance in Nigeria',
    category: 'Politics',
    date: 'April 10 2025',
  },
];

export const dummyPosts = [
  {
    id: 1,
    title: 'Peaceful coexistence in Nigeria',
    category: 'Society',
    date: 'Nov 01 2023',
    img: Post1,
    content:
      'Nigeria’s strength lies in its diversity. Building peaceful coexistence requires more than tolerance — it demands empathy, inclusion, and leadership that values every culture and belief. This post explores how dialogue and education can heal the divides that politics often deepens.',
  },
  {
    id: 2,
    title: 'The Price of Desire',
    category: 'Psychology',
    img: Post3,
    date: 'Nov 10 2024',
    content:
      'Desire fuels ambition, but unchecked, it can consume us. Drawing insights from behavioral psychology, this article examines the thin line between healthy aspiration and destructive obsession, and how self-awareness can bring balance to our pursuits.',
  },
  {
    id: 3,
    title: 'The Top One Percent in Anything in the World',
    category: 'Self Improvement',
    img: Post2,
    date: 'Nov 10 2025',
    content:
      'What separates the elite performers — in sports, art, or business — from everyone else? Research shows it’s not talent alone, but a mix of discipline, deep focus, and relentless learning. This piece dives into habits that make the world’s best, the best.',
  },
  {
    id: 4,
    title: 'Lessons from Chikwumerije’s Statement on the State of Governance in Nigeria',
    category: 'Politics',
    date: 'April 10 2025',
    img: Post5,
    content:
      'In his reflections on Nigerian leadership, Senator Uche Chikwumerije once warned of the dangers of moral decay and institutional neglect. This essay revisits his ideas and argues why his call for ethical governance remains more relevant today than ever.',
  },
  {
    id: 5,
    title: 'The Changing Face of African Cuisine',
    category: 'Food',
    date: 'June 15 2025',
    img: Post6,
    content:
      'From jollof rice battles to fusion fine dining, African cuisine is evolving beyond borders. Chefs across the continent are reinventing traditional recipes with modern techniques, turning local dishes into global experiences while preserving authentic flavors.',
  },
  {
    id: 6,
    title: 'Youth and Innovation: Redefining Nigeria’s Future',
    category: 'Culture',
    img: Post4,
    date: 'Sept 20 2025',
    content:
      'A new generation of Nigerian youth is rewriting the nation’s story through tech startups, creative arts, and activism. This article explores how innovation and resilience are shaping a future beyond the limitations of the past.',
  },
];

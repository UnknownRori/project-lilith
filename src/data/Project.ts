import type { Project } from "@/models/Projects";

export const projectLists = [
  {
    name: 'Project Ἔρεβος',
    description: 'Math Resolver in C++',
    type: 'app',
    tags: ['Math', 'Shunting Yard', 'C++', 'Raylib', 'Web Assembly', 'Emscripten'],

    imgUrl: 'https://raw.githubusercontent.com/UnknownRori/project-erebus/main/screenshot/screenshot-1.png',
    sourceUrl: 'https://github.com/UnknownRori/project-erebus',
    previewUrl: 'https://unknownrori.github.io/project-erebus/',
  },
  {
    name: 'CLI Video Player',
    description: 'Terminal Video Player written in Rust, it\'s render video on Terminal',
    type: 'app',
    tags: ['Rust', 'ffmpeg', 'Video Player', 'Terminal'],

    imgUrl: 'https://github.com/UnknownRori/cli-video-player/raw/main/screenshot/demo.jpg',
    sourceUrl: 'https://github.com/UnknownRori/cli-video-player',
    previewUrl: 'https://youtu.be/1PNJHKkE3QI?si=rDZZ2hwC7u1l7Krp',
  },
  {
    name: 'Touhou Unfinished Matrix Dream',
    description: 'Touhou Gameboy Cover',
    type: 'music',
    tags: ['Gameboy', 'Music', '8-Bit', 'VGM'],

    imgUrl: 'https://f4.bcbits.com/img/a3227884736_16.jpg',
    sourceUrl: null,
    previewUrl: 'https://open.spotify.com/album/1XOjB6SruP6ZhWjGJ6SSls',
  },
  {
    name: 'TouhouRad',
    description: 'Multi-Platform Touhou Music Player',
    type: 'app',
    tags: ['Flutter', 'Mobile', 'Multi-platform'],

    imgUrl: 'https://github.com/UnknownRori/touhourad',
    sourceUrl: 'https://github.com/UnknownRori/touhourad',
    previewUrl: null,
  },
  {
    name: 'Nordland - ᚾᛟᚱᛞᛚᚨᚾᛞ',
    description: 'Orchestra style',
    type: 'music',
    tags: ['Music', 'Orchestra', 'VGM'],

    imgUrl: 'https://img.itch.zone/aW1nLzIwMTQ5ODA5LmdpZg==/original/Ir59NF.gif',
    sourceUrl: null,
    previewUrl: 'https://unknownrori.itch.io/nordland',
  },
  {
    name: 'Escape Velocity',
    description: 'Vertical Scrolling shooting game',
    type: 'game',
    tags: ['Game', 'Raylib', 'Web', 'Web Assembly'],

    imgUrl: 'https://img.itch.zone/aW1nLzIwMTEzMjYwLmdpZg==/original/zVDrOp.gif',
    sourceUrl: null,
    previewUrl: 'https://unknownrori.itch.io/escape-velocity',
  },
  {
    name: 'Schmhotel',
    description: 'Hotel reservation app',
    type: 'web',
    tags: ['Web', 'E-Commerce', 'SSR', 'Laravel', 'Bootstrap'],

    imgUrl: 'https://user-images.githubusercontent.com/68576836/267157350-6380e0ca-3bd0-4342-a514-584cd135b782.png',
    sourceUrl: 'https://github.com/UnknownRori/reservation-room-app',
    previewUrl: null,
  },
] as Project[];

export const projectAppList = projectLists.filter((project) => project.type === 'app');
export const projectGameList = projectLists.filter((project) => project.type === 'game');
export const projectMusicList = projectLists.filter((project) => project.type === 'music');
export const projectWebList = projectLists.filter((project) => project.type === 'web');

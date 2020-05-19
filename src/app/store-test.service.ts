import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTestService {

  forSidebar = [
    { image: 'https://via.placeholder.com/130x135?text=Visit',
      title: 'Report',
      text: 'Explore Instagram Video: How to convert, engage, and get more Instagra...',
      read: 'Read Report'
    },
    { image: 'https://via.placeholder.com/130x135?text=Visit',
      title: 'Blog Post',
      text: 'How to make social video work for your marketing team',
      read: 'Read Store'
    },
    { image: 'https://via.placeholder.com/130x135?text=Visit',
      title: 'Webinar',
      text: 'The video Forecast: 2019 predictions from industry leaders',
      read: 'Watch Webinar'
    },
    { image: 'https://via.placeholder.com/130x135?text=Visit',
      title: 'Report',
      text: 'Winning strategies for digital video',
      read: 'Read report'
    }
  ];

  forNewBlogPosts = [
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Blog Post',
      text: '4 organic ways to improve your website KPIs',
      read: 'Read Story'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Blog Post',
      text: 'How to turn your next event into a video content goldmine',
      read: 'Read Store'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Blog Post',
      text: 'How to quickly turn your podcast into a video script',
      read: 'Read Story'
    },
  ];

  forPopular = [
    { image: 'https://via.placeholder.com/120x120?text=Visit',
      title: 'Blog Post',
      text: 'Thr Basic: Distributing Your Videos Across Different Channels',
      read: 'Read Story'
    },
    { image: 'https://via.placeholder.com/120x120?text=Visit',
      title: 'Webinar',
      text: 'Thr Basic: Structuring Your Video Marketing Strategy',
      read: 'Watch Webinar'
    },
    { image: 'https://via.placeholder.com/120x120?text=Visit',
      title: 'Report',
      text: 'Thr Basic: Structuring Marketing Strategy',
      read: 'Read Report'
    },
  ];

  forEvents = [
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Webinar',
      text: 'Micro-influencers and B2C brand videos: A match made in heaven',
      read: 'Watch Webinar'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Webinar',
      text: 'Webinar: Improving content marketing trough visual storytelling',
      read: 'Watch Webinar'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Webinar',
      text: 'How to reach audiences with social video: From Millennials to Gen Z',
      read: 'Watch Webinar'
    },
  ];

  forNews = [
    {image: 'https://via.placeholder.com/250x250?text=Visit', title: 'Announcing V2.9.7 Release',
      name: 'Kirti Joshi', date: 'April 21, 2020', text: 'At Froala, our mission has always been ' +
        'about pushing web editing beyond its conceived limits—this vision has served as the guiding ' +
        'philosophy for all Froala releases from Version 1.x to'},

    {image: 'https://via.placeholder.com/250x250?text=Visit', title: 'Doing Wonders With Images In the Froala',
      name: 'Kirti Joshi', date: 'April 1, 2020', text: 'Froala Editor can enhance your editing experience by providing methods to ' +
        'customize and manipulate creative images. Read more to learn what\'s possible!'},

    {image: 'https://via.placeholder.com/250x250?text=Visit', title: 'Quick and Easy Methods to Adjust the Size of Your Froala',
      name: 'Kirti Joshi', date: 'March 24, 2020', text: 'Froala Editor offers developers the complete flexibility and creativity' +
        ' to adjust the look and feel of the editor to suit their application. In a recent blog post, we discussed how'},

    {image: 'https://via.placeholder.com/250x250?text=Visit', title: 'Using Multiple Froala Editors On a Single Webpage',
      name: 'Kirti Joshi', date: 'March 12, 2020', text: 'Froala Editor is a lightweight WYSIWYG HTML Editor written in ' +
        'Javascript that enables rich text editing capabilities for your applications. Froala Editor provides users with customizable' +
        ' features and parameters that'},

    {image: 'https://via.placeholder.com/250x250?text=Visit', title: '3 Easy Steps to Designing Impressive Email Templates with Froala',
      name: 'Kirti Joshi', date: 'January 27, 2020', text: 'Have you ever come across a stunning website, app or an impressive email ' +
        'design that made you stop right there to browse further? Pretty sure we all have—at least once,'},
  ];

  getSidebar() {
    return this.forSidebar;
  }

  getNewBlogPosts() {
    return this.forNewBlogPosts;
  }

  getPopular() {
    return this.forPopular;
  }

  getEvents() {
    return this.forEvents;
  }

  getNews() {
    return this.forNews;
  }

  constructor() { }
}

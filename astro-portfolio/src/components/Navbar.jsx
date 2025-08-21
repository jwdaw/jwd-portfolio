import { Tabs, TabList, Tab, Link } from 'react-aria-components';

export default function Navbar() {
  return (
    <Tabs>
      <TabList>
        <Tab id="home"><Link href="/" aria-label="home link">Home</Link></Tab>
        <Tab id="projects"><Link href="/projects" aria-label="projects link">Projects</Link></Tab>
        <Tab id="about"><Link href="/about" aria-label="about link">About</Link></Tab>
        <Tab id="contact"><Link href="/contact" aria-label="contact link">Contact</Link></Tab>
        <Tab id="blog"><Link href="/blog" aria-label="blog link">Blog</Link></Tab>
        <Tab id="resume"><Link href="/resume" aria-label="resume link">Resume</Link></Tab>
      </TabList>
    </Tabs>
  );
}

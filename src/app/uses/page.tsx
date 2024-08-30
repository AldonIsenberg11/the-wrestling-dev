import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I&rsquo;m being productive when I&rsquo;m really just procrastinating. Here&rsquo;s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Mac Mini - 10C CPU - 16C GPU">
            I was using a 16” MacBook Pro prior to this but the stability the
            Mac Mini has found it&rsquo;s place. I&rsquo;ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with load testing simulations.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you&rsquo;re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="Magic Keyboard with Numeric Keypad - US English">
            They don&rsquo;t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I&rsquo;m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VsCode">
            I don&rsquo;t care if it&rsquo;s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="macOs Terminal">
            I&rsquo;m honestly not even sure what features I don&rsquo;t get with this that aren&rsquo;t
            part of the iTerm2 so it&rsquo;s what I use.
          </Tool>
          <Tool title="Github Copilot">
            Github copilot has pushed AI to the forefront of my development.
            It is the best thing to happen to me since my last born child.
            I use it for everything from writing emails to writing code.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it&rsquo;s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="ChatGpt">
            There is no better friend than ChatGpt. I use it for everything from
            writing emails to writing code. 
          </Tool>
          <Tool title="Calendly">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

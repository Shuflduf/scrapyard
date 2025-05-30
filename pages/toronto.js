import Head from 'next/head'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'

// TODO: Change this schedule to your own!
const schedule = [
  { time: '7:00–8:30 AM', event: 'Organizers setup' },
  { time: '8:30–9:00 AM', event: 'Arrival & settling in' },
  { time: '9:00–9:30 AM', event: 'Opening ceremony' },
  { time: '9:30 AM–8:30 PM', event: 'Programming' },
  {
    time: '8:30–9:20 PM',
    event:
      "Presentation (One person stays at a project's station while others circulate to vote on their favorite project)"
  },
  { time: '9:20–9:30 PM', event: 'Closing ceremony' },
  { time: '9:30–10:00 PM', event: 'Clean up & departure' }
]

const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Flag = () => (
  <Link
    href="https://hackclub.com/"
    target="_blank"
    aria-label="Hack Club's homepage"
    sx={{ position: 'absolute', top: 4, left: 0, zIndex: 2 }}
  >
    <Image
      src="/elements/orpheus-flag.svg"
      alt="Hack Club flag"
      sx={{
        width: [120, 128, 180],
        transformOrigin: '0% 0%',
        transition: 'transform 0.1s',
        ':hover': {
          transform: 'rotate(0.03turn) scale(1.2) translateY(-4px)'
        }
      }}
    />
  </Link>
)

export default function Toronto() {
  return (
    <Box
      sx={{
        background:
          "url('/backgrounds/cutting-mat.png'), linear-gradient(#337D78, #337D78)",
        backgroundSize: ['1100px', '1100px', '1100px', 'contain'],
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      <Head>
        <title>Scrapyard Toronto</title>
      </Head>
      <Flag />
      <Box
        sx={{
          width: '100%',
          height: ['80vh', '80vh', '90vh'],
          bg: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <Image
            sx={{
              width: '600px',

              maxWidth: '70vw',

              objectFit: 'contain'
            }}
            src="/city/toronto/Wordmark.svg"
            alt="Scrapyard"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              background: "url('/elements/ripped-paper.png')",
              backgroundSize: 'cover',
              // aspectRatio: "1080/338.4",
              // padding: "8%",
              // paddingLeft: "7%",
              display: 'block',

              width: 'min(500px, calc(100vw - 30px))',
              filter: 'drop-shadow(5px 5px 5px #000000AA)',
              position: 'relative',
              zIndex: 20
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '8%'
              }}
            >
              Build stupid stuff, get stupid prizes.
            </Heading>
          </Box>
          <Box
            sx={{
              zIndex: 1,
              width: 'max-content',
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              width: '75%',
              position: 'relative',
              zIndex: 30,
              top: '-15%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: '3%',
              filter: 'drop-shadow(5px 5px 5px #00000099)'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'p22-stanyan',
                mx: '8%',
                p: 0,
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                width: 'max-content',
                fontSize: ['1.2em', '1.4em']
              }}
            >
              Toronto - March&nbsp;16
            </Heading>
            <Text
              sx={{
                fontFamily: 'p22-stanyan',
                fontSize: ['0.9em', '1.1em'],
                textAlign: 'center',
                mt: 1
              }}
            >
              Sunday 9am to 9:30pm!
            </Text>
            <Text
              sx={{
                fontFamily: 'p22-stanyan',
                fontSize: ['0.8em', '1em'],
                textAlign: 'center',
                mt: 1
              }}
            >
              TMU, 245 Church Street, Toronto, ON M5B 2K3, Room ENG-LG14 (Enter
              through the central entrance doors facing Church Street)
            </Text>
            <Text
              sx={{
                fontFamily: 'moonblossom',
                mt: 2,
                textAlign: 'center'
              }}
            >
              <Link href="https://discord.gg/eMzU6vuZwj">Discord</Link>{' '}
              <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
              <Link href="https://www.instagram.com/scrapyard_toronto/">
                Instagram
              </Link>{' '}
              <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
              <Link href="https://hackclub.com/slack">Slack</Link>{' '}
            </Text>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100vw'
          }}
        >
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '50%',
              left: '10%'
            }}
            src="/elements/stars/blue.png"
            alt="Blue paper star"
          />
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '55%',
              right: '15%'
            }}
            src="/elements/stars/yellow.png"
            alt="Yellow paper star"
          />
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '70%',
              left: '20%',
              transform: 'rotate(180deg)'
            }}
            src="/elements/stars/pink.png"
            alt="Pink paper star"
          />
        </Box>
        <Link
          href="https://forms.hackclub.com/scrapyard-signup?event=toronto"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              position: 'fixed',
              right: ['2%'],
              top: ['4%'],
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              },
              zIndex: 30,
              minWidth: '8em',
              padding: '15px'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                padding: ['2%', '8%'],
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                width: '100%'
              }}
            >
              SIGN&nbsp;UP
            </Heading>
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          width: '100%',
          background: "url('/elements/paper-top.png')",
          backgroundSize: 'contain',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          position: 'relative',
          height: '23vw'
        }}
      >
        <img
          src="/elements/trash-can.png"
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '70vw',
            transform: 'translateY(-40%)',
            zIndex: 7
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          // background: "linear-gradient(#F5F5F5, #F2F2F2)",
          background: 'url(/backgrounds/ripped-paper.png)',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          pt: 6,
          px: 4,
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <Image src="/elements/orpheus-doodle.svg" />
          <Box
            sx={{
              maxWidth: ['80vw', '60vw', '40vw'],
              padding: '40px',
              zIndex: 1,
              backgroundImage: 'url(/elements/sticky-note.svg)',
              backgroundSize: 'cover',
              filter: 'drop-shadow(5px 5px 5px #000000AA)'
            }}
          >
            <Heading
              sx={{
                textDecoration: 'underline'
              }}
            >
              What's Scrapyard Toronto?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              Scrapyard Toronto is a hackathon for high schoolers happening in
              Toronto, where you can make the stupidest things you can think of!
              Anything, from a{' '}
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
                lamp that flashes faster the slower you type
              </Link>
              , to those ideas that you wouldn't dare to consider to be useful,
              goes at Scrapyard. No matter your experience, Scrapyard Toronto
              needs you and your scrappy ideas!
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            display: ['none', 'none', 'block']
          }}
        >
          <Image
            src="/elements/doodles/arrow.svg"
            sx={{ position: 'absolute', left: '5%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/pinkcircle.svg"
            sx={{ position: 'absolute', left: '20%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/yellowcircle.svg"
            sx={{ position: 'absolute', left: '8%', top: '70%' }}
          />
          <Image
            src="/elements/doodles/bluesquiggle.svg"
            sx={{ position: 'absolute', left: '8%', top: '84%' }}
          />
          <Image
            src="/elements/doodles/yellowlines.svg"
            sx={{ position: 'absolute', left: '37%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluecircle.svg"
            sx={{ position: 'absolute', right: '30%', top: '78%' }}
          />
          <Image
            src="/elements/doodles/pinksquiggle.svg"
            sx={{ position: 'absolute', right: '10%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluedrops.svg"
            sx={{ position: 'absolute', right: '10%', top: '0%' }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100vw',
          background: "url('/backgrounds/ripped-paper-bottom.png')",
          backgroundSize: 'cover',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

          height: '17.03212647vw',
          position: 'relative'
        }}
      ></Box>
      <Box
        sx={{
          // backgroundImage: "url(/backgrounds/confetti.png)",
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            // backgroundSize: "cover!important",
            // display: "block",
            // width: "30vw",
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center'
            }}
          >
            WHAT'S HAPPENING AT SCRAPYARD TORONTO?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center'
          }}
        >
          Scrapyard Toronto is a 12 Hour event - HERE'S THE ROUGH
          SCHEDULE!
        </Heading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: ['90%', '70%'],
            fontSize: '2em',
            gap: '0.2em',
            color: 'black',
            my: 5,
            background: "url('/backgrounds/lined-paper.png')",
            backgroundSize: ['contain', 'contain', 'cover!important'],
            p: 4,
            borderRadius: 1,
            boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
          }}
        >
          {schedule.map((item, i) => (
            <div
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center'
              }}
              key={i}
            >
              <Heading
                as="p"
                sx={{
                  display: 'inline',
                  width: ['min-content', 'max-content'],
                  fontSize: '2rem',
                  fontFamily: 'p22-stanyan'
                }}
              >
                {item.event}
              </Heading>
              <Box
                sx={{
                  mx: 2,
                  transform: 'translateY(0.75rem)',
                  borderWidth: 0,
                  borderBottomWidth: '0.35rem',
                  borderStyle: 'dotted',
                  flexGrow: '1',
                  display: 'inline',
                  height: 1
                }}
              ></Box>
              <p style={{ display: 'inline', margin: 0 }}>{item.time}</p>
            </div>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          // backgroundImage: "url(/backgrounds/confetti.png)",
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            // backgroundSize: "cover!important",
            // display: "block",
            // width: "30vw",
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center'
            }}
          >
            CAN'T MAKE IT TO TORONTO?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center',
            mx: '5vw'
          }}
        >
          THERE ARE 100+ OTHER SCRAPYARD EVENTS HAPPENING AROUND THE WORLD!
        </Heading>
        <Box
          sx={{
            width: ['100%', '80%'],
            height: '75vh',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            mb: '10vh',
            mt: 5
          }}
        >
          <Map />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          background: "url('/backgrounds/lined-paper.png')",
          backgroundSize: ['contain', 'contain', 'cover!important'],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          p: [4, 4, 5],
          pt: 6,
          position: 'relative'
        }}
      >
        <Heading
          as="h1"
          sx={{
            mb: 5,
            position: 'relative'
          }}
        >
          Frequently Asked Questions
          <Image
            src="/elements/doodles/blue-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%) translateY(75%)'
            }}
          />
        </Heading>
        <Grid
          columns={[1, 1, 1, 2]}
          gap={4}
          sx={{
            maxWidth: '1200px'
          }}
        >
          {Object.entries({
            'Who can participate in Scrapyard?': (
              <>
                All high-school & upper-middle-school aged students are welcome
                to come! You don't have to be a member of the Hack Club
                community or be a Hack Club leader.
              </>
            ),
            'All this, for free?': (
              <>
                Yep! Food, swag and good vibes are all included. Plus, if you’re
                joining us from afar,{' '}
                <Link href="https://gas.hackclub.com/">
                  we’ll cover the cost of gas or a bus / train ticket
                </Link>
                .
              </>
            ),
            'What do I need?': (
              <>
                Your laptop, chargers, and an open mind! If you're going to an
                overnight event, bring toiletries and sleeping bagstoo.
                Additionally, if you plan to work on a hardware project, bring
                the tools you'll need.
              </>
            ),
            'I’m not good at coding. Can I still participate?': (
              <>
                This hackathon is for creatives of all skill levels! We'll have
                workshops and other events so join us and let's learn together.
                If you'd like to start exploring some introductory projects,
                check out Hack Club Workshops.
              </>
            ),
            'What can I make at Scrapyard?': (
              <>
                The scrappiest thing you can imagine –- jank is encouraged.
                Games?Apps?Websites?Programming languages?<em>Hardware?</em> You
                name it! We’ll have a bunch of resources and mentors to help you
                out.
              </>
            ),
            'What has Hack Club done before?': (
              <>
                Hack Club has run an{' '}
                <Link href="https://youtu.be/PnK4gzO6S3Q" target="_blank">
                  overnight hackathon
                </Link>{' '}
                in San Francisco, a{' '}
                <Link
                  href="https://www.youtube.com/watch?v=H5RPsCMl3uM"
                  target="_blank"
                >
                  Game Jam
                </Link>{' '}
                across 50 cities, a hackathon on a{' '}
                <Link href="https://youtu.be/2BID8_pGuqA" target="_blank">
                  Train
                </Link>{' '}
                from Vermont to Los Angeles, and much more!
              </>
            ),
            'What if my parents are concerned?': (
              <>
                We’re here to help! Our parents guide will be released soon, but
                they can reach out to us at{' '}
                {/* TODO: Change this email to your event's email */}
                <Link href="mailto:toronto@scrapyard.hackclub.com">
                  {/* TODO: Change this email to your event's email */}
                  toronto@scrapyard.hackclub.com
                </Link>{' '}
                for questions.
              </>
            ),
            'What if I have more questions?': (
              <>
                Contact us! Feel free to reach out to us in the
                #scrapyard-toronto channel on the Hack Club slack or email us at{' '}
                <Link href="mailto:toronto@scrapyard.hackclub.com">
                  toronto@scrapyard.hackclub.com
                </Link>
                .
              </>
            )
          }).map(([question, answer], i) => {
            return (
              <Card
                key={question}
                sx={{
                  background: [
                    'transparent',
                    `url('/elements/doodles/boxes/${(i % 6) + 1}.svg')`
                  ],
                  backgroundSize: [null, '100% 100%'],
                  backgroundRepeat: 'no-repeat',
                  boxShadow: 'none',
                  padding: '48px!important',
                  border: ['2px solid black', 'none']
                }}
              >
                <Heading
                  as="h2"
                  mb={4}
                  sx={{
                    position: 'relative'
                  }}
                >
                  {question}
                  <Image
                    src="/elements/doodles/yellow-underline.svg"
                    sx={{
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(75%)'
                    }}
                  />
                </Heading>
                <Text
                  sx={{
                    fontSize: 3,
                    fontWeight: 'bold'
                  }}
                >
                  {answer}
                </Text>
              </Card>
            )
          })}
        </Grid>

        <Box
          sx={{
            width: '90%',
            maxWidth: '1200px',
            mx: 'auto',
            my: 6,
            py: 4,
            background: "url('/backgrounds/lined-paper.png')",
            backgroundSize: 'cover',
            borderRadius: 4,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <Heading
            as="h1"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontSize: ['1.8em', '2.2em'],
              position: 'relative',
              pb: 2,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: 'primary'
              }
            }}
          >
            Meet the Team
          </Heading>
          <Grid columns={[1, 2, 3]} gap={4} sx={{ px: [2, 3, 4] }}>
            {[
              {
                name: 'Hajrah',
                grade: '12th Grade',
                highSchool: 'Lynn Rose College',
                message:
                  'I’m so excited to see all of your excited faces when presenting your projects and to see the very many cool ideas even though we’d all be sleep deprived.',
                quote: 'Sometimes doing nothing is the best thing to do!!',
                img: 'https://cdn.hack.pet/U084RT5K678/Untitled%20design.png'
              },
              {
                name: 'Itai',
                grade: '12th Grade',
                highSchool: 'Maple High School',
                message:
                  'Looking forward to hypnotizing everyone into being an engineer for a day.',
                quote: 'There is a house in New Orleans.',
                img: 'https://cdn.hack.pet/U084RT5K678/Screenshot%202025-03-05%20211234.png'
              },
              {
                name: 'Ritvik',
                grade: '11th Grade',
                highSchool: 'Victoria Park Collegiate Institute',
                message: 'Looking forward to making friends!!',
                quote:
                  'There are 10 types of people in the world: those who understand binary and those who don’t.',
                img: 'https://cdn.hack.pet/U084RT5K678/Screenshot%202025-03-05%20211256.png'
              },
              {
                name: 'Ayaan',
                grade: '12th Grade',
                highSchool: 'White Oaks S.S.',
                message:
                  'Looking forward to seeing the most random stuff made :)',
                quote: 'i am speed.',
                img: 'https://cdn.hack.pet/U084RT5K678/Screenshot%202025-03-05%20212225.png'
              },
              {
                name: 'Sunni',
                grade: '10th Grade',
                highSchool: 'Anderson CVI',
                message: 'Looking forward to stupid sh*t and stupid prizes',
                quote: 'if two wrongs dont make a right, try three.',
                img: 'https://cdn.hack.pet/U084RT5K678/Screenshot%202025-03-05%20212240.png'
              },
              {
                name: 'Annie',
                grade: '10th Grade',
                highSchool: 'Oakville Trafalgar High School',
                message:
                  'So excited to learn new things at the workshops and see all your cool projects!',
                quote:
                  ' If every porkchop were perfect, we wouldn’t have hot dogs.',
                img: 'https://cdn.hack.pet/U084RT5K678/download%20(4).png'
              }
            ].map((member, i) => (
              <Card
                key={i}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  border: '2px solid #000',
                  background: 'white',
                  boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease',
                  ':hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '50%',
                    mb: 3,
                    border: '3px solid #000',
                    mx: 'auto'
                  }}
                />
                <Heading as="h3" sx={{ mt: 2, fontSize: '1.5em' }}>
                  {member.name}
                </Heading>
                <Text sx={{ mt: 1, fontSize: '1.1em', color: '#555' }}>
                  {member.grade} &bull; {member.highSchool}
                </Text>
                <br></br>
                <Text sx={{ mt: 2, fontStyle: 'italic', fontSize: '1em' }}>
                  "{member.quote}"
                </Text>
                <br></br>
                <Text sx={{ mt: 2 }}>{member.message}</Text>
              </Card>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            width: '90%',
            maxWidth: '1200px',
            mx: 'auto',
            my: 2,
            py: 4,
            background: "url('/backgrounds/lined-paper.png')",
            backgroundSize: 'cover',
            borderRadius: 4,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <Heading
            as="h1"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontSize: ['1.8em', '2.2em'],
              position: 'relative',
              pb: 2,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: 'primary'
              }
            }}
          >
            Sponsors
          </Heading>
          <Grid
            gap={4}
            sx={{
              px: [2, 3, 4],
              // On small screens show a single column; on larger screens use 2 columns (2fr/1fr)
              gridTemplateColumns: ['1fr', '2fr 1fr']
            }}
          >
            <Card
              sx={{
                p: 4,
                textAlign: 'center',
                border: '2px solid #000',
                background: 'white',
                boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease',
                ':hover': {
                  transform: 'translateY(-3px)'
                }
              }}
            >
              <Image
                src="https://cdn.hack.pet/U084RT5K678/image%20(4).png"
                alt="Arista Networks"
                sx={{
                  width: '90%',
                  height: 'auto',
                  objectFit: 'contain',
                  mx: 'auto',
                  mb: 3
                }}
              />
              <Heading as="h3" sx={{ fontSize: '1.7em', mb: 2 }}>
                Arista Networks
              </Heading>
              <Text sx={{ fontSize: '1.1em' }}>
                Arista Networks is an industry leader in data-driven, client to
                cloud networking for large data center/AI, campus and routing
                environments. Their award-winning platforms deliver
                availability, agility, automation, analytics and security
                through an advanced network operating stack.
              </Text>
            </Card>
            <Card
              sx={{
                p: 3,
                textAlign: 'center',
                border: '2px solid #000',
                background: 'white',
                boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease',
                ':hover': {
                  transform: 'translateY(-3px)'
                }
              }}
            >
              <Image
                src="https://cdn.hack.pet/U084RT5K678/system76-logo-open-source-tagliner4_1730474034__00841.webp"
                alt="System76"
                sx={{
                  width: '70%',
                  maxHeight: '140px',
                  objectFit: 'contain',
                  mx: 'auto',
                  mb: 3
                }}
              />
              <Heading as="h3" sx={{ fontSize: '1.5em', mb: 2 }}>
                System76
              </Heading>
              <Text sx={{ fontSize: '1em' }}>
                System76 builds powerful open source computers, keyboards, and
                software, empowering creators, makers, and builders to unleash
                their potential.
              </Text>
            </Card>
          </Grid>

          <Heading
            as="h2"
            sx={{
              textAlign: 'center',
              mt: 5,
              mb: 3,
              fontSize: ['1.4em', '1.6em']
            }}
          >
            Our Partners
          </Heading>
          <Grid columns={[3, 4, 6]} gap={3} sx={{ px: [2, 3, 4] }}>
            {[
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/278694a1ea294828eef8af0f8d2bf149921b6f6c_vueschool_logo_two_lines_white_bg__1_.png',
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/d7969da1d87bed74c9174d0a235307bd4f529ff5_image__5_.png',
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/393d615a4bdd2b724f5607e3337c630b73e3e2be_image__9_.png',
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/35d714f86028aea17dad967cc70887dfe0c5dad9_download__2___1_.png',
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/c999a19e5fa1e98d34cb01a31c870c758b329524_download__3_.png',
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/9d8b606916917690138ab77fc477400c1cfd1a89_image__8_.png',
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/9153306113d018c87d206fa57557ea842b4549c7_hetzner-logo__2___1_.png',
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/eccd6fe6bb17a69a954054518cb053a44369ce1b_xyz-logo-color.png',
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/9d570f29ffe22aa71800cb981104a1bd37093296_white__1_.png',
              'https://hc-cdn.hel1.your-objectstorage.com/s/v3/cc36a0d2d1d081b1a3bc4b534fad1bfde5d39be8_logo__1_.svg',
              'https://cdn.hack.pet/U084RT5K678/Screenshot%202025-03-05%20214400.png',
              'https://community.aws/img/AWS_logo_light.svg'
            ].map((logo, i) => (
              <Box
                key={i}
                sx={{
                  border: '1px solid #ccc',
                  p: 2,
                  borderRadius: 2,
                  background: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  src={logo}
                  alt={`Sponsor ${i + 1}`}
                  sx={{ width: '80%', height: 'auto' }}
                />
              </Box>
            ))}
          </Grid>
        </Box>

        <Link
          href="https://forms.hackclub.com/scrapyard-signup?event=toronto"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              },
              zIndex: 20,
              padding: 1,
              my: 3
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '8%',
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                paddingY: ['15px', '0px'],
                lineHeight: 1.5
              }}
            >
              SIGN UP FOR SCRAPYARD TORONTO
            </Heading>
          </Box>
        </Link>
        <Heading
          as="h2"
          sx={{
            mt: 3,
            position: 'relative'
          }}
        >
          Scrapyard
          <Image
            src="/elements/doodles/pink-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%) translateY(75%)'
            }}
          />
        </Heading>
        <Text
          sx={{
            fontFamily: 'moonblossom',
            mb: -2,
            textAlign: 'center'
          }}
        >
          Made with ♡ by teenagers, for teenagers at Hack Club
        </Text>
        <Text
          sx={{
            fontFamily: 'moonblossom',
            mt: 0,
            textAlign: 'center'
          }}
        >
          <Link href="https://hackclub.com">Hack Club</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://discord.gg/eMzU6vuZwj">Discord</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://www.instagram.com/scrapyard_toronto/">
            Instagram
          </Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/slack">Slack</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/clubs">Clubs</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/hackathons">Hackathons</Link>
        </Text>
      </Box>
    </Box>
  )
}

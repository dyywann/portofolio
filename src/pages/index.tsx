import { Container, Flex, Grid, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import Hand from "../assets/hands.svg";
import Star from "../assets/star.png";
import UIMobile from "../assets/rantangin-ui-porto.svg";
import UIWeb from "../assets/rantangin-ui-web.svg";
import Website from "../assets/rantangin-landing.svg";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { ArrowSquareRight, Instagram } from "iconsax-react";
import Link from "next/link";
import Accordion from "@/components/ui/Accordion";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await axios.post("https://docs.google.com/forms/d/e/1FAIpQLSfsYcGDfbH12EnLEWBytPJcugwvthVZqHJEgw_xH7GtFWSNtQ/formResponse", formData, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });

      // Tampilkan SweetAlert jika data dikirim, terlepas dari error response dari Google
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Pesan berhasil dikirim!",
        confirmButtonColor: "#3085d6",
      });
    } catch (error) {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Pesan berhasil dikirim!",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  return (
    <div className="bg-background-color overflow-x-hidden">
      {/* Hero Section */}
      <Section id="home" className="min-h-[91vh] flex items-center justify-center light-section">
        <Container className="flex flex-col items-center justify-center h-full">
          <Flex as="div" justify={"center"}>
            <Flex as="div" align={"center"} className="bg-white shadow-lg px-6 py-3 rounded-full max-w-fit">
              <p className="text-base md:text-lg font-normal leading-tight text-gray-800">Hi, I&apos;m Ridwan Efendy</p>
              <Image src={Hand} alt="Peace sign" width={30} height={30} className="w-6 h-6 md:w-9 md:h-9 object-contain ml-2" />
            </Flex>
          </Flex>

          <Flex as="div" justify={"center"} className="mt-4">
            <Text className="text-2xl md:text-6xl font-bold text-text-color">User Interface Designer</Text>
          </Flex>

          <Flex align={"center"} justify={"center"} className="mb-4">
            <Text className=" text-2xl md:text-6xl font-bold text-text-color">
              <span className="font-normal">Based in</span> Indonesia
            </Text>
          </Flex>

          <Flex align={"center"} justify={"center"} className="text-center mb-10">
            <Text className=" text-base md:text-lg font-normal text-secondary-text-color w-[42%] md:w-2/4">I would be happy to help create a user-friendly and intuitive website with a modern interface design</Text>
          </Flex>

          <Flex align={"center"} justify={"center"}>
            <a href="#contact">
              <button className="px-6 py-3 bg-primary-color text-text-color text-base md:text-lg font-medium rounded-full">Let&apos;s Talk and Connect</button>
            </a>
          </Flex>
        </Container>
      </Section>

      {/* Section untuk Achivment */}
      <div className="w-full bg-primary-color min-h-[7vh] flex items-center md:min-h-14 mt-0 md:mt-5 overflow-hidden">
        {/* Wrapper untuk konten yang di-scroll */}
        <div className="flex items-center animate-scroll-left whitespace-nowrap">
          {/* Duplikasi pertama dari konten yang di-scroll */}
          <Flex align={"center"} gap={"8"} wrap={"nowrap"}>
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">3</span>YEAR OF EXPERIENCE
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">10</span>PROJECT DONE
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">2</span>ACHIEVEMENT
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
          </Flex>

          {/* Duplikasi kedua dari seluruh konten untuk scrolling tak terbatas */}
          <Flex align={"center"} gap={"8"} wrap={"nowrap"} className="ml-36">
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">3</span>YEAR OF EXPERIENCE
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">10</span>PROJECT DONE
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">2</span>ACHIEVEMENT
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
          </Flex>

          <Flex align={"center"} gap={"8"} wrap={"nowrap"} className="ml-36">
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">3</span>YEAR OF EXPERIENCE
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">10</span>PROJECT DONE
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">2</span>ACHIEVEMENT
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
          </Flex>

          <Flex align={"center"} gap={"8"} wrap={"nowrap"} className="ml-36">
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">3</span>YEAR OF EXPERIENCE
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">10</span>PROJECT DONE
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
            <Text className="font-medium text-text-color text-lg">
              <span className="font-bold pr-2">2</span>ACHIEVEMENT
            </Text>
            <Image src={Star} width={30} height={30} alt="Sparkle" />
          </Flex>
        </div>
      </div>

      {/* Section untuk About Me */}
      <Section id="about-me" className="bg-background-dark-color dark-section">
        <Container className="px-6 md:px-0">
          <Text className="text-xl md:text-6xl font-bold text-white">About Me</Text>

          <Text as="p" className="text-base md:text-lg text-[#E0E0E0] mt-6">
            Hi, I&apos;m Ridwan Efendy, a UI Designer and front-end developer with 3 years of experience. I specialize in crafting clean, user-friendly interfaces that enhance the experience on websites and applications. My goal is to
            create intuitive designs that bring ideas to life.
          </Text>

          <Text as="div" className="text-xl md:text-4xl font-normal text-[#E0E0E0] mt-14">
            Experince
          </Text>

          <Grid columns={{ initial: "1", md: "2", xl: "2" }} gap={"6"} className="mt-6">
            <Accordion
              year="2023"
              title="UI Designer Internship"
              subtitle="PT Bank Rakyat Indonesia (Persero) Tbk"
              description="I completed a 5-month UI Design internship at PT Bank Rakyat Indonesia, where I designed a loan monitoring dashboard for internal use. My work included building components, high-fidelity designs, and prototypes."
            />
          </Grid>

          <Text as="div" className="text-xl md:text-4xl font-normal text-[#E0E0E0] mt-14">
            Achivment
          </Text>

          <Grid columns={{ initial: "1", md: "2", xl: "2" }} gap={"6"} className="mt-6">
            <Accordion
              year="2023"
              title="Finalist UX Design Competion"
              subtitle="GEMASTIK 2023 (NATIONAL)"
              description="I participated in the GEMASTIK competition in the UX Design category, where I was involved in designing innovative digital solutions to address real-world problems. My primary focus was on creating user-centered and intuitive interfaces, covering every aspect from user research to interactive prototyping. This experience enhanced my skills in user-oriented design and teamwork within a competitive environment."
            />

            <Accordion
              year="2022"
              title="2 Place UI/UX Design Competition"
              subtitle="DIMAS-TI AMLI (NATIONAL)"
              description="I participated in the DIMAS-TI AMLI competition in UI/UX Design, where I focused on creating user-centered and effective interface solutions. This experience strengthened my skills in user research, interactive design, and effectively presenting concepts to judges."
            />
          </Grid>
        </Container>

        <Container id="portfolio" className="my-20 px-6 md:px-0">
          <Flex align={"center"} justify={"between"}>
            <Text className="text-xl md:text-6xl font-bold text-white w-[60%]">Check Out My Latest Visual Exploration</Text>
            <Flex align={"center"} justify={"center"} gap={"6"}>
              <Text className="text-base md:text-xl font-normal text-white">View All</Text>
              <Link href={"#"}>
                <ArrowSquareRight size="32" color="#F8F7F5" />
              </Link>
            </Flex>
          </Flex>

          <Grid columns={{ initial: "1", md: "3", xl: "3" }} gap={"5"} className="mt-6">
            <Card className="pt-4 bg-[#2C2F31]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image alt="Card background" className="object-cover rounded-xl" src={UIMobile} width={455} height={185} />
              </CardHeader>

              <CardBody>
                <Flex align={"center"} justify={"between"} className="mb-4" gap={"2"}>
                  <div>
                    <h4 className="text-xl font-bold text-primary-color">Rantangin UI Mobile Design</h4>
                    <small className="text-[#E0E0E0] mt-1">Start-Up Project</small>
                  </div>
                  <a
                    href="https://www.figma.com/proto/lvzCHmd9L0CLrkcrx8bD0G/Rantangin-Mobile-Design?page-id=1%3A27&node-id=1-23399&node-type=canvas&viewport=1672%2C1563%2C0.23&t=p2I0CgLoTNhR2PVu-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A22695" // Ganti dengan URL yang Anda inginkan
                    target="_blank" // Membuka link di tab baru
                    rel="noopener noreferrer" // Untuk keamanan, terutama jika link mengarah ke domain eksternal
                    className="px-5 py-3 bg-primary-color text-text-color text-base md:text-lg font-medium rounded-lg"
                  >
                    View
                  </a>
                </Flex>
              </CardBody>
            </Card>

            <Card className="pt-4 bg-[#2C2F31]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image alt="Card background" className="object-cover rounded-xl" src={UIWeb} width={455} height={185} />
              </CardHeader>

              <CardBody>
                <Flex align={"center"} justify={"between"} className="mb-4" gap={"2"}>
                  <div>
                    <h4 className="text-xl font-bold text-primary-color">Rantangin UI Website Design</h4>
                    <small className="text-[#E0E0E0] mt-1">Start-Up Project</small>
                  </div>
                  <a
                    href="https://www.figma.com/design/MKvtKYZnGGePM8i1TxWUpZ/Rantangin-Website-Design?node-id=0-1&t=76KylHSScXF1N0VE-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-primary-color text-text-color text-base md:text-lg font-medium rounded-lg"
                  >
                    View
                  </a>
                </Flex>
              </CardBody>
            </Card>

            <Card className="pt-4 bg-[#2C2F31]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image alt="Card background" className="object-cover rounded-xl" src={Website} width={455} height={50} />
              </CardHeader>

              <CardBody>
                <Flex align={"center"} justify={"between"} className="mb-4" gap={"2"}>
                  <div>
                    <h4 className="text-xl font-bold text-primary-color">Rantangin Landing Page</h4>
                    <small className="text-[#E0E0E0] mt-1">Start-Up Project</small>
                  </div>
                  <a href="https://rantangin.com/" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-primary-color text-text-color text-base md:text-lg font-medium rounded-lg">
                    View
                  </a>
                </Flex>
              </CardBody>
            </Card>
          </Grid>
        </Container>
      </Section>

      <section id="contact" className="min-h-[80vh] flex items-center justify-center py-32 bg-background-color light-section">
        <div className="container mx-auto flex flex-col items-center justify-center h-full max-w-2xl px-4 md:px-0">
          <h2 className="text-2xl md:text-6xl font-bold text-text-color text-center">Get in Touch</h2>

          <p className="text-base md:text-lg font-normal text-secondary-text-color text-center my-3 w-full md:w-3/4">
            Interested in collaborating or have any questions? Feel free to reach out, and let&apos;s connect! You can contact me through the form below or directly via email or social media.
          </p>

          <Flex as="div" align={"center"} justify={"center"} gap={"6"}>
            <a href="https://www.linkedin.com/in/ridwanefendy" target="_blank" className="hover:opacity-80">
              <Image src="/icons/linkedin-dark.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/dyy.wann" target="_blank" className={`hover:opacity-80`}>
              <Instagram size="26" color="#333333" />
            </a>
          </Flex>

          <form onSubmit={handleSubmit} className="w-full space-y-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="125615716"
                name="entry.125615716"
                type="text"
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                classNames={{
                  input: "bg-transparent",
                  inputWrapper: "bg-transparent border border-gray-300 dark:border-gray-600",
                }}
              />

              <Input
                id="56191686"
                name="entry.56191686"
                type="email"
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                classNames={{
                  input: "bg-transparent",
                  inputWrapper: "bg-transparent border border-gray-300 dark:border-gray-600",
                }}
              />
            </div>

            <Textarea
              id="1965141307"
              name="entry.1965141307"
              label="Message"
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              classNames={{
                input: "bg-transparent",
                inputWrapper: "bg-transparent border border-gray-300 dark:border-gray-600",
              }}
            />

            <div className="flex justify-center">
              <button type="submit" className="mt-4 px-8 py-3 bg-primary-color text-text-color text-base md:text-lg font-medium rounded-lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

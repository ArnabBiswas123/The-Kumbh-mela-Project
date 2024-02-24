import React from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function KumbhInfo() {
  return (
    <Center width={"100%"} my={4} overflow={"hidden"}>
      <Center
        width={["100%", "90%", "80%", "60%"]}
        display={"flex"}
        flexDir={"column"}
      >
        <Heading
          as="h1"
          fontFamily="Georgia, serif"
          fontSize="4xl"
          fontWeight="bold"
          my={4}
        >
          About Kumbh Mela
        </Heading>
        <Text fontFamily="Georgia, serif" fontSize="lg" lineHeight="taller"  m={8}>
          Kumbh Mela (the festival of the sacred Pitcher) is the largest
          peaceful congregation of pilgrims on earth, during which participants
          bathe or take a dip in a sacred river. Devotees believe that by
          bathing in the Ganges one is freed from sins liberating her/him from
          the cycle of birth and death. Millions of people reach the place
          without any invitation. The congregation includes ascetics, saints,
          sadhus, aspirants-kalpavasis and visitors. The festival is held at
          Allahabad, Haridwar, Ujjain and Nasik every four years by rotation and
          is attended by millions of people irrespective of caste, creed or
          gender. Its primary bearers, however, belong to akhadas and ashrams,
          religious organizations, or are individuals living on alms. Kumbh Mela
          plays a central spiritual role in the country, exerting a mesmeric
          influence on ordinary Indians. The event encapsulates the science of
          astronomy, astrology, spirituality, ritualistic traditions, and social
          and cultural customs and practices, making it extremely rich in
          knowledge. As it is held in four different cities in India, it
          involves different social and cultural activities, making this a
          culturally diverse festival. Knowledge and skills related to the
          tradition are transmitted through ancient religious manuscripts, oral
          traditions, historical travelogues and texts produced by eminent
          historians. However, the teacher-student relationship of the sadhus in
          the ashrams and akhadas remains the most important method of imparting
          and safeguarding knowledge and skills relating to Kumbh Mela.
        </Text>
        <Heading
          as="h1"
          fontFamily="Georgia, serif"
          fontSize="4xl"
          fontWeight="bold"
          my={4}
        >
          Mythology
        </Heading>
        <LazyLoadImage
          src="./assets/SamudraManthan.png"
          height={"100%"}
          width={"60%"}
        ></LazyLoadImage>
        <Text
          fontFamily="Georgia, serif"
          fontSize="lg"
          lineHeight="taller"
          m={8}
        >
          Many Hindus believe that the Kumbh Mela originated in times immemorial
          and is attested in the Hindu mythology about Samudra Manthana found in
          the Vedic texts.Historians, in contrast, reject these claims as none
          of the ancient or medieval era texts that mention the Samudra Manthana
          legend ever link it to a "mela" or festival. According to Giorgio
          Bonazzoli – a scholar of Sanskrit Puranas, these are anachronistic
          explanations, an adaptation of early legends to a later practice by a
          "small circle of adherents" who have sought roots of a highly popular
          pilgrimage and festival.The first page of Prayag Snana Vidhi
          manuscript . It describes methods to complete a bathing pilgrimage at
          Prayag. The manuscript (1674 CE) has a colophon, which states "Copied
          by Sarvottama, son of Vishvanatha Bhatta, Samvat 1752".This Hindu
          legend describes the creation of a "pot of amrita (nectar of
          immortality)" after the forces of good and evil churn the ocean of
          creation. The gods and demons fight over this pot, the "kumbha", of
          nectar in order to gain immortality. In a later day extension to the
          legend, the pot is spilled at four places, and that is the origin of
          the four Kumbha Melas. The story varies and is inconsistent, with some
          stating Vishnu as Mohini avatar, others stating Dhanavantari or Garuda
          or Indra spilling the pot.This "spilling" and associated Kumbh Mela
          story is not found in the earliest mentions of the original legend of
          Samudra Manthana such as the Vedic era texts (pre-500 BCE).Nor is this
          story found in the later era Puranas (3rd to 10th-century CE).
        </Text>
        <Heading
          as="h1"
          fontFamily="Georgia, serif"
          fontSize="4xl"
          fontWeight="bold"
          my={4}
        >
          History
        </Heading>
        <Text
          fontFamily="Georgia, serif"
          fontSize="lg"
          lineHeight="taller"
          m={8}
        >
          The earliest mention of Prayag and the bathing pilgrimage is found in
          Rigveda Pariśiṣṭa (supplement to the Rigveda).It is also
          mentioned in the Pali canons of Buddhism, such as in section 1.7 of
          Majjhima Nikaya, wherein the Buddha states that bathing in Payaga
          (Skt: Prayaga) cannot wash away cruel and evil deeds, rather the
          virtuous one should be pure in heart and fair in action.The
          Mahabharata mentions a bathing pilgrimage at Prayag as a means of
          prāyaścitta (atonement, penance) for past mistakes and guilt.In
          Tirthayatra Parva, before the great war, the epic states "the one who
          observes firm [ethical] vows, having bathed at Prayaga during Magha, O
          best of the Bharatas, becomes spotless and reaches heaven."In
          Anushasana Parva, after the war, the epic elaborates this bathing
          pilgrimage as "geographical tirtha" that must be combined with
          Manasa-tirtha (tirtha of the heart) whereby one lives by values such
          as truth, charity, self-control, patience and others.There are
          other references to Prayaga and river-side festivals in ancient Indian
          texts, including at the places where present-day Kumbh Melas are held,
          but the exact age of the Kumbh Mela is uncertain. The 7th-century
          Buddhist Chinese traveller Xuanzang (Hiuen Tsang) mentions king Harsha
          and his capital of Prayag, which he states to be a sacred Hindu city
          with hundreds of "deva temples" and two Buddhist institutions. He also
          mentions the Hindu bathing rituals at the junction of the rivers.
          According to some scholars, this is the earliest surviving historical
          account of the Kumbh Mela, which took place in present-day Prayag in
          644 CE.
        </Text>
      </Center>
    </Center>
  );
}

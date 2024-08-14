"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function AboutSection() {
  return (
    <div id="about">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mb-5 bg-gradient-to-br from-slate-100 to-slate-400 py-4 bg-clip-text font-varino text-center text-4xl font-medium text-transparent md:text-6xl">
          UOJ CODERS
        </motion.h1>
        <div className="w-11/12 md:w-3/4 flex flex-col gap-y-1">
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="py-4 text-white text-lg text-justify font-medium">
            UoJCoders v3.0, organized by the Computer Society (CompSoc) and the
            Department of Computer Science at the University of Jaffna, aims to
            enhance the problem-solving and programming skills among
            undergraduate students in computing, fostering the development of
            efficient programmers. This 12-hour inter-university coding
            competition, inspired by IEEEXtreme, is open to all undergraduate
            students in Sri Lanka, especially those pursuing degrees in
            computing disciplines.
          </motion.p>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-white py-4 text-lg text-justify font-medium">
            The competition is set to take place on September 14th and 15th,
            2024, at the Department of Computer Science, University of Jaffna.
            The 12-hour coding marathon will be conducted online using the
            HackerRank platform (http://hackerrank.com), with participants
            expected to be present at the competition venue. Participants are
            encouraged to solve problems utilizing appropriate data structures
            and algorithms, with questions predominantly related to real-world
            problems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-white py-4 text-lg text-justify font-medium">
            Participation in UoJCoders v3.0 will significantly improve
            students&apos; problem-solving, coding, and teamwork skills. Given
            the rapid nature of the competition, it will also enhance
            participants&apos; efficiency and time management abilities.
            UoJCoders v1.0, held on the 16th and 17th of March 2019, saw over
            200 teams in the elimination round, with 25 teams advancing to the
            finals.
          </motion.p>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-white py-4 text-lg text-justify font-medium">
            Although UoJCoders v2.0 was announced for the 4th and 5th of April
            2020, it could not be conducted due to the COVID-19 pandemic. We are
            excited to resume the competition with UoJCoders v3.0 and look
            forward to a vibrant and competitive event that continues the legacy
            of its predecessors.
          </motion.p>
        </div>
      </LampContainer>
    </div>
  );
}

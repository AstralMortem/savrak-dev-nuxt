<template>
  <div class="w-full h-full flex flex-col items-center space-y-[50vh] mt-[50%] md:mt-0 md:space-y-4">
    <UISection id="home">
      <div class="flex flex-col gap-8 justify-center items-center w-full h-full z-20">
        <div class="flex flex-col justify-center items-center gap-6">
          <p class="text-neutral-900 dark:text-green-600 text-xl lg:text-3xl font-bold font-['Play'] leading-6 text-center">
            FOP "SAVRAK BOGDAN MYKHAILOVICH"
          </p>
          <p class="text-primary-600 dark:text-gray-200 text-6xl lg:text-8xl font-bold font-['Inter'] leading-10">
            savrak.dev
          </p>
          <div class="text-primary-600 dark:text-green-600 text-base font-bold font-['Roboto Mono'] leading-none">
            FRONTEND DEVELOPER • REACT • C#
          </div>
        </div>
        <div class="flex flex-row justify-evenly items-center gap-4">
          <UIButton only-icon leading-icon="ph:telegram-logo" rounded="full" color="bg-blue-600"/>
          <UIButton only-icon leading-icon="ph:linkedin-logo" rounded="full" color="bg-blue-800"/>
          <UIButton only-icon leading-icon="ph:github-logo" rounded="full" color="bg-neutral-800 dark:bg-white dark:text-black"/>
        </div>
      </div>
    </UISection>
    <UISection title="Biography" description="FEW WORDS ABOUT ME" id="bio">
      <UICard>
        <div class="flex flex-col justify-start items-start">
          <div class="flex flex-row justify-start items-center gap-5">
            <img src="/img/avatar.jpg" class="w-[100px] h-[100px] rounded-full"/>
            <p class="text-2xl font-semibold font-['Inter'] text-neutral-900 dark:text-gray-200">Hi, my name is <span class="text-primary-600 dark:text-green-600">Bogdan Savrak</span>. I`m <span class="text-primary-400 dark:text-green-400">Frontend Developer</span></p>
          </div>
          <div class="flex flex-row justify-start items-start ml-10">
            <BioList :list="bioList"/>
          </div>
        </div>
      </UICard>
    </UISection>
    <UISection title="Projects" description="MADE WITH ❤️ AND PASSION" id="projects">
      <ProjectsList :data="projectList"/>
    </UISection>
    <UISection title="Hard Skills" description="LIST OF TECHNOLOGIES 🧑‍💻" id="skills">
      <SkillsList :data="skillsList"/>
    </UISection>
    <UISection title="Contacts" description="FEEL FREE TO CONTACT ME 😉" id="contacts">
      <div class="flex flex-col md:flex-row justify-center items-center gap-4">
        <UISociall title="telegram" logo="ph:telegram-logo" text="@BohdanSavrak"/>
        <UISociall title="email" logo="ph:envelope" text="@BohdanSavrak"/>
      </div>
    </UISection>
  </div>
</template>

<script setup lang="ts">
import type { Project, Skills } from '~/types/type';

const bioList = [{
  title: "Age",
  text: "22 y.o"
},{
  title: "Location",
  text: "Kyiv, Ukraine"
},{
  title: "Education",
  text: "NAU, Software Engineering(Bachelor's degree)"
},{
  title: "Additional Education",
  text: "IT STEP",
},{
  title: "Total experience",
  text: "3.5+ years"
},{
  title: "Work 01",
  text: "QFlow | 2020 - Current"
}]

const projectList:Array<Project> = [{
  title: 'Project',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis, ligula sed blandit consequat, tortor mi sodales turpis, quis dignissim tellus mi ut mi. Cras bibendum nisl arcu, quis aliquet odio vestibulum eu. Maecenas placerat tincidunt lorem, eget eleifend augue faucibus at. Proin rhoncus nulla in suscipit molestie. Donec posuere consectetur fringilla.',
  previewLink: "/#projects",
  gitLink: "/#projects",
  image: '/img/not-found.png',
  logo: '/img/not-found.png',
  techStack: ['react', 'redux', 'tailwindcss', 'ts', 'nodejs']
}]

const skillsList: Array<Skills> = [{
  title: 'programming',
  techList: ["ts", "js", "nodejs", "cs", "dotnet", "aspnet"]
},{
  title: 'frontend',
  techList: ["react", "next", "redux", "vue", "angular", "scss"]
},{
  title: 'other',
  techList: ["git", "bash", "docker"]
}]
</script>


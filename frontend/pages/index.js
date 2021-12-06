import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import HomeSlider from "../components/homeSlider"
import FormComponent from "../components/form"
import ServiceComponent from "../components/service"
import MasterPlan from "../components/masterPlan"
import Section1 from "../components/section1"
import Section2 from "../components/section2"
import Banner from "../components/banner"
import Amenities from "../components/amenities"
import Models from "../components/models"

const Home = ({
  articles,
  categories,
  homepage,
  homeSlider,
  services,
  amenities,
  models,
  global,
}) => {
  return (
    <Layout categories={categories} global={global}>
      <Seo seo={homepage.attributes.seo} />
      <HomeSlider homeSlider={homeSlider} lg={9} />
      <FormComponent lg={3} homepage={homepage} />
      <ServiceComponent lg={12} services={services} />
      <MasterPlan lg={12} homepage={homepage} />
      <Section1 lg={12} homepage={homepage} />
      <Banner lg={12} homepage={homepage} />
      <Amenities lg={12} amenities={amenities} />
      <Section2 lg={12} homepage={homepage} />
      <Models lg={12} homepage={homepage} models={models} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articlesRes,
    categoriesRes,
    globalRes,
    homepageRes,
    amenitiesRes,
    modelsRes,
    servicesRes,
    homeSliderRes,
  ] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/global", {
      populate: "*",
    }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
        form: { populate: "*" },
        master: { populate: "*" },
        section1: { populate: "*" },
        section2: { populate: "*" },
        banner: { populate: "*" },
      },
    }),
    fetchAPI("/amenities", { populate: "*" }),
    fetchAPI("/models", { populate: "*" }),
    fetchAPI("/services", { populate: "*" }),
    fetchAPI("/home-sliders", { populate: "*" }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      global: globalRes.data,
      homepage: homepageRes.data,
      amenities: amenitiesRes.data,
      models: modelsRes.data,
      services: servicesRes.data,
      homeSlider: homeSliderRes.data,
    },
    revalidate: 1,
  }
}

export default Home

import React, { useState } from "react";
import { Box, Button, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CareerPages() {
  const pages = [
    {
      name: "Jane Street",
      url: "https://www.janestreet.com/join-jane-street/open-roles/?type=internship&location=new-york&duration=all-durations",
    },
    {
      name: "Hudson River Trading",
      url: "https://www.hudsonrivertrading.com/careers/?_4168241=Software+Engineering%3AC%2B%2B%2CSoftware+Engineering%3APython%2CStrategy+Development%2CTrade+Operations&_4118765=Internship#newjobsboard",
    },
    {
      name: "Citadel",
      url: "https://www.citadel.com/careers/open-opportunities/students/internships/",
    },
    {
      name: "Optiver",
      url: "https://optiver.com/working-at-optiver/career-opportunities/?search=internship&numberposts=10&paged=1&department=technology&level=internship",
    },
    {
      name: "DRW",
      url: "https://www.drw.com/work-at-drw/listings?filterType=category&value=Technology",
    },
    {
      name: "De Shaw",
      url: "https://www.deshawresearch.com/joining.html",
    },
    {
      name: "Two Sigma",
      url: "https://careers.twosigma.com/careers/OpenRoles",
    },
    {
      name: "Akuna capital",
      url: "https://akunacapital.com/careers#careers",
    },
    {
      name: "Jump Trading",
      url: "https://www.jumptrading.com/careers/",
    },
    {
      name: "Akuna capital",
      url: "https://akunacapital.com/careers#careers",
    },
    {
      name: "IMC",
      url: "https://www.imc.com/us/search-careers?jobTypes=Intern",
    },
    {
      name: "Point 72",
      url: "https://careers.point72.com/?experience=internships",
    },
    {
      name: "Akuna capital",
      url: "https://akunacapital.com/careers#careers",
    },
    {
      name: "Old Mission Capital",
      url: "https://www.oldmissioncapital.com/careers/",
    },
    {
      name: "Belvedere Trading",
      url: "https://www.belvederetrading.com/our-positions",
    },
    {
      name: "Balyasny Asset Management",
      url: "https://bambusdev.my.site.com/s/",
    },
    {
      name: "GTS",
      url: "https://careers-gtsx.icims.com/jobs/search?ss=1&mobile=false&width=1905&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240",
    },
    {
      name: "SIG",
      url: "https://careers.sig.com/intern-co-op-jobs/",
    },
    {
      name: "Wolverine Trading",
      url: "https://www.wolve.com/careers",
    },
    {
      name: "Headlands Tech",
      url: "https://www.headlandstech.com/careers/",
    },
    {
      name: "Five Rings",
      url: "https://fiverings.com/careers/",
    },
    {
      name: "Arrow Street Capital",
      url: "https://arrowstreetcapital.wd5.myworkdayjobs.com/en-US/Arrowstreet",
    },
    {
      name: "PDT Patners",
      url: "https://pdtpartners.com/careers",
    },
    {
      name: "Meta",
      url: "https://www.metacareers.com/jobs?teams[0]=University%20Grad%20-%20Business&teams[1]=University%20Grad%20-%20Engineering%2C%20Tech%20%26%20Design&teams[2]=University%20Grad%20-%20PhD%20%26%20Postdoc&roles[0]=Internship&page=2",
    },
    {
      name: "Google",
      url: "https://www.google.com/about/careers/applications/jobs/results/?src=Online/Google%20Website/ByF&utm_source=Online%20&utm_medium=careers_site%20&utm_campaign=ByF&company=Fitbit&company=Google&company=YouTube&distance=50&employment_type=INTERN",
    },
    {
      name: "Nvidia",
      url: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?workerSubType=0c40f6bd1d8f10adf6dae42e46d44a17&workerSubType=ab40a98049581037a3ada55b087049b7",
    },
    {
      name: "Netflix",
      url: "https://explore.jobs.netflix.net/careers?query=%22internship%22%20-intern&pid=790298263814&domain=netflix.com&sort_by=relevance&triggerGoButton=false",
    },
    {
      name: "Apple",
      url: "https://jobs.apple.com/en-ca/search?team=Internships-STDNT-INTRN",
    },
    {
      name: "Palantir",
      url: "https://www.palantir.com/careers/",
    },
    {
      name: "Uber",
      url: "https://www.uber.com/ca/en/careers/list/?query=Internship&department=University",
    },
    {
      name: "Snowflake",
      url: "https://careers.snowflake.com/us/en/search-results",
    },
    {
      name: "Databricks",
      url: "https://www.databricks.com/company/careers/open-positions?department=University%20Recruiting&location=all",
    },
    {
      name: "Bloomberg",
      url: "https://bloomberg.avature.net/careers/SearchJobs/?1686=%5B55479%5D&1686_format=2312&listFilterMode=1&jobRecordsPerPage=12&&tactic-page=900442",
    },
    {
      name: "Stripe",
      url: "https://stripe.com/jobs/search?tags=University",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/jobs/search/?currentJobId=3705752503&f_C=39939%2C9202023%2C2587638%2C1337&f_E=1&f_F=eng&geoId=92000000&origin=JOB_SEARCH_PAGE_JOB_FILTER&sortBy=R",
    },
    {
      name: "Roblox",
      url: "https://careers.roblox.com/jobs?groups=early-career-talent&page=1&pageSize=9",
    },
    {
      name: "Amazon",
      url: "https://amazon.jobs/en/search?offset=0&result_limit=10&sort=relevant&category_type=studentprograms&distanceType=Mi&radius=24km&latitude=&longitude=&loc_group_id=&loc_query=&base_query=&city=&country=&region=&county=&query_options=&",
    },
    {
      name: "Microsoft",
      url: "https://jobs.careers.microsoft.com/global/en/search?q=internship&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true&ref=cms",
    },
    {
      name: "Snapchat",
      url: "https://careers.snap.com/jobs?type=Intern",
    },
    {
      name: "Doordash",
      url: "https://careersatdoordash.com/job-search/?department=&job_ids=&location=&intern=1&spage=1",
    },
    {
      name: "Ramp",
      url: "https://ramp.com/emerging-talent",
    },
    {
      name: "Notion",
      url: "https://app.ripplematch.com/v2/public/company/notion?tl=1edfe69a",
    },
    {
      name: "Riot Games",
      url: "https://www.riotgames.com/en/university-programs#craft=internships",
    },
    {
      name: "Waymo",
      url: "https://careers.withwaymo.com/jobs/search?page=1&employment_type_uids%5B%5D=fa4c4a8317c6c87309f488cb0d63aa7c&query=",
    },
    {
      name: "Coinbase",
      url: "https://www.coinbase.com/en-ca/careers/positions?department=Internships%2520%2526%2520Emerging%2520Talent%2520Positions",
    },
    {
      name: "Twitter",
      url: "https://careers.x.com/en#positions",
    },
    {
      name: "Tesla",
      url: "https://www.tesla.com/en_CA/careers/search/?type=3&site=CA",
    },
    {
      name: "Intuit",
      url: "https://jobs.intuit.com/search-jobs/Mountain%20View%2C%20CA/27595/4/6252001-5332921-5393021-5375480/37x38605/-122x08385/50/2",
    },
    {
      name: "Spotify",
      url: "https://www.lifeatspotify.com/students",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/jobs/en/early-career/",
    },
    {
      name: "Cohere",
      url: "https://jobs.ashbyhq.com/cohere",
    },
    {
      name: "CockroachDB",
      url: "https://www.cockroachlabs.com/careers/open-positions/",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/company/careers/students-and-graduates",
    },
    {
      name: "Lyft",
      url: "https://www.lyft.com/careers/early-talent",
    },
    {
      name: "Rippling",
      url: "https://www.rippling.com/en-CA/careers/open-roles",
    },
    {
      name: "Duolingo",
      url: "https://careers.duolingo.com/?type=Intern#careers",
    },
    {
      name: "Hubspot",
      url: "https://www.hubspot.com/careers/jobs?hubs_signup-url=www.hubspot.com%2Fcareers%2Fstudents%2Fintern-coop&hubs_signup-cta=careers-interncoop-bottom&page=1#roleType=intern",
    },
    {
      name: "Single Store",
      url: "https://www.singlestore.com/careers/jobs/",
    },
    {
      name: "Duolingo",
      url: "https://careers.duolingo.com/?type=Intern#careers",
    },
    {
      name: "Splunk",
      url: "https://www.splunk.com/en_us/careers/search-jobs.html?page=1&type=Intern",
    },
    {
      name: "Splunk",
      url: "https://www.splunk.com/en_us/careers/search-jobs.html?page=1&type=Intern",
    },
  ];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleBack = () => {
    setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleForward = () => {
    setCurrentPageIndex((prev) => Math.min(prev + 1, pages.length - 1));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={2}
      gap={2}
    >
      <h1>{pages[currentPageIndex].name} Career Page</h1>
      <Box
        component="iframe"
        src={pages[currentPageIndex].url}
        sx={{
          width: "80vw",
          height: "60vh",
          border: "1px solid #ccc",
        }}
        title={`${pages[currentPageIndex].name} Careers`}
      />
      <Link
        href={pages[currentPageIndex].url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ fontSize: "1rem" }}
      >
        {pages[currentPageIndex].url}
      </Link>

      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        maxWidth="300px"
        gap={2}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          disabled={currentPageIndex === 0}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleForward}
          disabled={currentPageIndex === pages.length - 1}
          endIcon={<ArrowForwardIcon />}
        >
          Forward
        </Button>
      </Box>
    </Box>
  );
}

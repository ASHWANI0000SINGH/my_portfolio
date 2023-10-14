import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import SchoolIcon from "@mui/icons-material/School";
// import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
// import {MdWorkOutline} from 'react-icons/bi'
// import { MdWorkOutline } from "@react-icons/all-files/fa/MdWorkOutline";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// MdWork
import { FcBriefcase,FcDiploma2 } from "react-icons/fc";
const Experience = () => {
  return (
    <div id='experience'>
      <h2> Timeline</h2>

    <VerticalTimeline className='vertical-timeline'  animate={ false }>
  <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', }}
    // contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - present"
    iconStyle={{ background: '#fef2f2'}}
    icon={<FcBriefcase />}
  >
    <h3
    
    className="vertical-timeline-element-title">Hcl Technologies</h3>
    <h4 
     className="vertical-timeline-element-subtitle">Bangalore India</h4>
    <p
    
    >
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022 - present"
    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    iconStyle={{ background: '#fef2f2'}}

    icon={<FcDiploma2 />}

  >
    <h3 className="vertical-timeline-element-title">Scalar Academy</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangalore India</h4>
    <p>
    Master of Science in Computer
    Science
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2021 - 2021"
    // iconStyle={{ backgroundColor: 'black' }}
    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    iconStyle={{ background: '#fef2f2'}}


    // icon={<WorkIcon />}
    icon={<FcBriefcase />}

  >
    <h3 className="vertical-timeline-element-title">Melange India </h3>
    <h4 className="vertical-timeline-element-subtitle">Bangalore India</h4>
    <p>
      Key Account Manager
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2016 - 2020"
    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    iconStyle={{ background: '#fef2f2'}}

    icon={<FcDiploma2 />}
  >
    <h3 className="vertical-timeline-element-title">Jain University</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangalore India</h4>
    <p>
      BCA(Mobile Application & cloud Technologies)
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date=" 2014-2015"
    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    iconStyle={{ background: '#fef2f2'}}

    icon={<FcDiploma2 />}
  >
    <h3 className="vertical-timeline-element-title">Kv Asc Centre</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangalore India</h4>
    <p>
      High School
    </p>
  </VerticalTimelineElement>
  

  
</VerticalTimeline>

   
    
    </div>
  )
};

export default Experience;

import { auth } from "@/auth";
import { IoMdHome } from "react-icons/io";

export default async function RootHome() {
  const session = await auth();
  //console.log(session);

  return (
    <div className="dashboard">
      <div className="titledashboard flex flex-sb">
        <div>
          <h2>
            Blogs <span>Dashboard</span>
          </h2>
          <h3>Admin Panel</h3>
        </div>
        <div className="breadcrumb">
          <IoMdHome /> <span>/</span> <span>Dashboard</span>
        </div>
      </div>

      <div className="topfourcards flex flex-sb">
        <div className="four_card">
          <h2>Total Blogs</h2>
          <span>10</span>
        </div>
        <div className="four_card">
          <h2>Total Topics</h2>
          <span>10</span>
        </div>
        <div className="four_card">
          <h2>Total Tags</h2>
          <span>10</span>
        </div>
        <div className="four_card">
          <h2>Total Draft</h2>
          <span>10</span>
        </div>
      </div>

      <div className="year_overview flex flex-sb">
        <div className="leftyearoverview">
          <div className="flex flex-sb">
            <h3>Year Overview</h3>
            <ul className="creative-dots">
              <li className="big-dot"></li>
              <li className="semi-big-dot"></li>
              <li className="medium-dot"></li>
            </ul>
            <h3 className="text-right">
              10 / 365 <br /> <span>Total Published</span>
            </h3>
          </div>
          {/* chart pending */}
        </div>
        <div className="right_salescont">
          <div>
            <h3>Blogs By Category</h3>
            <ul className="creative-dots">
              <li className="big-dot"></li>
              <li className="semi-big-dot"></li>
              <li className="medium-dot"></li>
            </ul>
          </div>
          <div className="blogscategory flex flex-center">
            <table>
              <thead>
                <tr>
                  <td>Topics</td>
                  <td>Data</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML, CSS & JavaScript</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Next.js & React.js</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Database</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Deployment</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

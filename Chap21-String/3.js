/**
 *
 * @param {string} fullImgTagHtmlCode
 */
function wasImgHtmlCodeHasBorderEqualQuoteZeroQuote(fullImgTagHtmlCode) {
  const regex = /border="0"/gm;
  return regex.test(fullImgTagHtmlCode);
}

const imgCode = `
  <img
  style="display: block"
  width="12"
  src="./images/spacer.gif"
  alt=""
  border="0"
  />
  `;

function f() {
  let ret = "";
  const htmlCode = `
  
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
  
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>No email subject</title>
      <link  sizes="1x1" rel="icon" href="./images/favicon-16x16.png" />
  
    <meta  name="title" content="HSBC"  />
    <meta  name="description" content="Explore Hong Kong with HSBC Credit Cards!"  />
  
      <style type="text/css">
      /* Mobile-specific Styles */
      
      html {
          -webkit-text-size-adjust: 100% !important;
      }
      
      a {
          text-decoration: none;
      }
      
      a:hover {
          text-decoration: underline;
      }
      
      table,
      tr,
      td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
      }
      
      td {
          font-size: 1px;
          line-height: 1px;
          text-align: left;
      }
      
      img {
          display: block;
      }
      
      @media only screen and (max-width: 716px) {
      table[class="mobileMarginBottom24px"],
      td[class="mobileMarginBottom24px"],
      img[class="mobileMarginBottom24px"],
      br[class="mobileMarginBottom24px"]{
        margin-bottom: 24px!important;
      }
  
      table.mobileMarginBottom24px,
      td.mobileMarginBottom24px,
      img.mobileMarginBottom24px,
      br.mobileMarginBottom24px{
        margin-bottom: 24px!important;
      }
  
  
  
          table[class="m0"],
          td[class="m0"],
          img[class="m0"],
          br[class="m0"] {
              background: none !important;
              display: none !important;
              height: 0px !important;
              width: 0px !important;
          }
          table.m0,
          td.m0,
          img.m0,
          br.m0 {
              background: none !important;
              display: none !important;
              height: 0px !important;
              width: 0px !important;
          }
          table[class="mfull"] {
              width: 333px !important;
          }
          table.mfull {
              width: 333px !important;
          }
          td[class="fullsize"],
          img[class="fullsize"] {
              display: block;
              width: 100% !important;
          }
          td.fullsize,
          img.fullsize {
              display: block;
              width: 100% !important;
          }
          table[class="mbody285"],
          td[class="mbody285"],
          img[class="mbody285"] {
              width: 285px !important;
          }
          table.mbody285,
          td.mbody285,
          img.mbody285 {
              width: 285px !important;
          }
          table[class="mHeightUnset"],
          td[class="mHeightUnset"],
          img[class="mHeightUnset"] {
              height: unset !important;
          }
          table.mHeightUnset,
          td.mHeightUnset,
          img.mHeightUnset {
              height: unset !important;
          }
  
          td[class="mH24"],
          table[class="mH24"] {
              padding-bottom: 24px !important;
          }
          td.mH24,
          table.mH24 {
              padding-bottom: 24px !important;
          }
  
  
  
          td[class="offer0Row"],
          table[class="offer0Row"] {
              display: block;
              padding-bottom: 0px !important;
          }
          td.offer0Row,
          table.offer0Row {
              display: block;
              padding-bottom: 0px !important;
          }
          td[class="offer1Row"],
          table[class="offer1Row"] {
              display: block;
              padding-bottom: 12px !important;
          }
          td.offer1Row,
          table.offer1Row {
              display: block;
              padding-bottom: 12px !important;
          }
          td[class="offer2Row"],
          table[class="offer2Row"] {
              display: block;
              padding-bottom: 24px !important;
          }
          td.offer2Row,
          table.offer2Row {
              display: block;
              padding-bottom: 24px !important;
          }
          table[class="mheightauto"],
          td[class="mheightauto"] {
              height: auto !important;
          }
          table.mheightauto,
          td.mheightauto {
              height: auto !important;
          }
          td[class="mCtaDivider"] {
              border-bottom: 1px solid #929292;
              border-right: 0px !important;
          }
          td.mCtaDivider {
              border-bottom: 1px solid #929292;
              border-right: 0px !important;
          }
      }
      </style>
  </head>
  
  <!-- Email Subject: no email subject  -->
  
  <body>
  
  
  
      <div align="center"> <font color="#d7d8d6" face="Arial, Helvetica, sans-serif" size="2">If this page does not display properly, please click
          <a href="http://www.hsbc.com.sg/" target="hsbc_launched">here</a>.</font
        >
        <br />
      </div>
      <br />
      <center>
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            width: 714px;
            border: 1px solid #cccccc;
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          "
          class="mfull"
        >
          <tbody>
            <tr>
              <td>
                <!-- Star header -->
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="714"
                  class="mfull"
                  bground="#ffffff"
                >
                  <tbody>
                    <tr>
                      <td width="24">
                        <img
                          src="images/spacer.gif"
                          height="1"
                          width="24"
                          border="0"
                          alt=""
                          title=""
                          style="display: block"
                        />
                      </td>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="images/spacer.gif"
                                  height="24"
                                  width="1"
                                  border="0"
                                  alt=""
                                  title=""
                                  style="display: block"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: left">
                                <img
                                  src="images/hsbc-logo.png"
                                  height="24"
                                  alt="HSBC"
                                  title="HSBC"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="images/spacer.gif"
                                  height="24"
                                  width="1"
                                  border="0"
                                  alt=""
                                  title=""
                                  style="display: block"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td valign="top">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        width="565"
                                        class="offer1Row mbody285 mH24"
                                        style="
                                          text-align: left;
                                          font-size: 28px;
                                          line-height: 1.2;
                                          font-family: Arial, Helvetica,
                                            sans-serif;
                                          color: #db0011;
                                        "
                                      >
                                        Explore Hong Kong with HSBC Credit Cards!
                                      </td>
  
                                      <td class="m0">
                                        <img
                                          src="images/spacer.gif"
                                          border="0"
                                          width="24"
                                          height="1"
                                          alt=""
                                          title=""
                                          class="m0"
                                          style="display: block"
                                        />
                                      </td>
                                      <td width="251" class="fullsize">
                                        <img
                                          src="images/cardface.jpg"
                                          border="0"
                                          width="251"
                                          height="48"
                                          alt=""
                                          title=""
                                          style="display: block"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td height="36">
                                <img
                                  src="images/spacer.gif"
                                  height="36"
                                  width="1"
                                  border="0"
                                  alt=""
                                  title=""
                                  style="display: block"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td width="24">
                        <img
                          src="images/spacer.gif"
                          height="1"
                          width="24"
                          border="0"
                          alt=""
                          title=""
                          style="display: block"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- End header -->
                <!-- Start main content -->
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="714"
                  class="mfull"
                >
                  <tbody>
                    <tr valign="top">
                      <td width="24">
                        <img
                          src="images/spacer.gif"
                          width="24"
                          height="1"
                          border="0"
                          alt=""
                          title=""
                          style="display: block"
                        />
                      </td>
                      <td>
                        <table
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          width="666"
                          class="mbody285"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <table
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td class="mbody285">
                                      <table
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            style="
                                              text-align: left;
                                              font-size: 14px;
                                              line-height: 18px;
                                              color: #333333;
                                              font-family: Arial, Helvetica,
                                                sans-serif;
                                            "
                                          >
                                            HSBC has partnered with The
                                            ENTERTAINER to bring you hundreds of
                                            complimentary 1-for-1 deals . Check
                                            out some of the dining deals you can
                                            enjoy during your stay in Hong Kong
                                            below.
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td height="24">
                                <img
                                  src="images/spacer.gif"
                                  height="24"
                                  width="1"
                                  border="0"
                                  alt=""
                                  title=""
                                  style="display: block"
                                />
                              </td>
                            </tr>
  
                            <!-- w -->
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr valign="top">
                                    <td
                                    class="mbody285 fullsize mH24"
                                    valign="top" >
                                      <img
                                   
                                        width="85"
                                        height="85"
                                        style="display: block"
                                        border="0"
                                        src="./images/placeholder-100x100.png"
                                        alt=""
                                      />
                                    </td>
  
                                    <td 
                                    class="m0"
                                   width="24">
                                      <img
                                      border="0"
                                        width="24"
                                        style="display: block"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <td
                                    class="mbody285 fullsize"
                                    
                                    >
                                      <table
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                        border: 1px solid #d7d8d6;
                                        border-collapse: initial;
                                      "
                                      >
                                        <tr>
                                          <td width="24">
                                            <img
                                              style="display: block"
                                              width="24"
                                              height="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                          <td valign="top">
                                            <table
                                              width="100%"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                            >
                                              <tr>
                                                <td height="24">
                                                  <img
                                                    style="display: block"
                                                    width="12"
                                                    height="24"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  style="
                                                    text-align: left;
                                                    font-size: 14px;
                                                    line-height: 18px;
                                                    color: #333333;
                                                    font-family: Arial, Helvetica,
                                                      sans-serif;
                                                  "
                                                  valign="top"
                                                >
                                                  Don't have the app yet?
                                                  <a
                                                    style="
                                                      color: rgb(99, 159, 241);
                                                    "
                                                    target="_blank"
                                                    href="https://cardpromotions.hsbc.com.sg/entertainer2019"
                                                    >Download</a
                                                  >
                                                  your complimentary ENTERTAINER
                                                  with HSBC app and unlock your
                                                  deals today!
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="24">
                                                  <img
                                                    style="display: block"
                                                    width="12"
                                                    height="24"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td width="24">
                                            <img
                                              style="display: block"
                                              width="24"
                                              height="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                            <tr>
                              <td height="48">
                                <img
                                  style="display: block"
                                  width="12"
                                  height="48"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tr>
                                    <td width="40" valign="top">
                                      <img
                                        style="display: block"
                                        width="40"
                                        src="./images/placeholder-100x100.png"
                                        alt=""
                                      />
                                    </td>
                                    <td width="12" valign="top">
                                      <img
                                        style="display: block"
                                        width="12"
                                        height="12"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <td
                                      style="
                                        text-align: left;
                                        line-height: 1.2;
                                        color: #333333;
                                        font-family: Arial, Helvetica, sans-serif;
                                        font-size: 22px;
                                      "
                                      valign="middle"
                                    >
                                      1-for-1 Dining Deals
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                            <tr>
                              <td height="12">
                                <img
                                  style="display: block"
                                  height="12"
                                  width="12"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tr>
                                    <td class="mbody285 fullsize mH24">
                                      <table
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        width="100%"
                                      >
                                        <tr>
                                          <td>
                                            <img
                                              width="321"
                                              class="mbody285"
                                              style="display: block"
                                              src="./images/placeholder-533x299.png" border="0"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
  
                                        <tr>
                                          <td>
                                            <table
                                              width="100%"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    width="12"
                                                    height="12"
                                                    style="display: block"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  style="
                                                    text-align: left;
                                                    font-size: 14px;
                                                    line-height: 18px;
                                                    color: #333333;
                                                    font-family: Arial, Helvetica,
                                                      sans-serif;
                                                  "
                                                >
                                               <strong>   Bib n Hops @ Wan Chai</strong>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    width="12"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td
                                                  style="
                                                    text-align: left;
                                                    font-size: 14px;
                                                    line-height: 18px;
                                                    color: #333333;
                                                    font-family: Arial, Helvetica,
                                                      sans-serif;
                                                  "
                                                >
                                                  1-for-1 Fried Chicken or Healthy
                                                  Greens
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    width="12"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td
                                                  style="
                                                    text-align: left;
                                                    font-size: 14px;
                                                    line-height: 18px;
                                                    color: #333333;
                                                    font-family: Arial, Helvetica,
                                                      sans-serif;
                                                  "
                                                >
                                                  <a
                                                    style="
                                                      color: rgb(99, 159, 241);
                                                    "
                                                    target="_blank"
                                                    href="https://cardpromotions.hsbc.com.sg/home-and-away#entertainer-with-hsbc-hong-kong
                                                  "
                                                  >
                                                    Find out more >
                                                  </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
  
                                    <td width="24" class="m0">
                                      <img
                                        height="12"
                                        width="24"
                                        style="display: block"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <td class="mbody285 fullsize">
                                      <table
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td class="mbody285">
                                            <img
                                              width="321"
                                              class="mbody285"
                                              style="display: block"
                                              src="./images/placeholder-533x299.png" border="0"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
  
                                        <tr>
                                          <td>
                                            <table
                                              width="100%"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    width="12"
                                                    height="12"
                                                    style="display: block"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td
                                                  style="
                                                    text-align: left;
                                                    color: #333333;
                                                    font-family: Arial, Helvetica,
                                                      sans-serif;
                                                    line-height: 18px;
                                                    font-size: 14px;
                                                  "
                                                >
                                              <strong>    Runway @ Central</strong>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    width="12"
                                                    height="12"
                                                    style="display: block"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td
                                                  style="
                                                    text-align: left;
                                                    color: #333333;
                                                    line-height: 18px;
                                                    font-family: Arial, Helvetica,
                                                      sans-serif;
                                                    font-size: 14px;
                                                  "
                                                >
                                                  1-for-1 Main Menu item
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    width="12"
                                                    height="12"
                                                    style="display: block"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td
                                                  style="
                                                    text-align: left;
                                                    color: #333333;
                                                    line-height: 18px;
                                                    font-family: Arial, Helvetica,
                                                      sans-serif;
                                                    font-size: 14px;
                                                  "
                                                >
                                                  <a
                                                    style="
                                                      color: rgb(99, 159, 241);
                                                    "
                                                    target="_blank"
                                                    href="https://cardpromotions.hsbc.com.sg/home-and-away#entertainer-with-hsbc-hong-kong
                                                  "
                                                  >
                                                    Find out more >
                                                  </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                            <tr>
                              <td height="24">
                                <img
                                  width="12"
                                  height="24"
                                  style="display: block"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td
                                style="
                                  text-align: left;
                                  color: #000000;
                                  font-family: Arial, Helvetica, sans-serif;
                                  font-size: 14px;
                                  line-height: 18px;
                                "
                              >
                                HSBC home & away programme brings you exclusive
                                travel, lifestyle and wellness privileges with
                                your HSBC Credit Card. Scroll to find out more or
                                <a
                                  style="color: rgb(99, 159, 241)"
                                  target="_blank"
                                  href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                               "
                                >
                                  visit our website
                                </a>
                                for the full list of offers.
                              </td>
                            </tr>
  
                            <tr>
                              <td height="48">
                                <img
                                  width="12"
                                  height="48"
                                  style="display: block"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tr>
                                    <td width="40">
                                      <img
                                        width="40"
                                        style="display: block"
                                        src="./images/placeholder-100x100.png"
                                        alt=""
                                      />
                                    </td>
  
                                    <td width="12">
                                      <img
                                      width="12"
                                        height="24"
                                        style="display: block"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <td
                                    valign="middle"
                                      style="
                                        color: #000000;
                                        text-align: left;
                                        font-family: Arial, Helvetica, sans-serif;
                                        font-size: 22px;
                                        line-height: 1.2;
                                      "
                                    >
                                      Travel Essentials
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                            <tr>
                              <td height="12">
                                <img
                                  style="display: block"
                                  height="12"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tr>
                                    <td class="mbody285 fullsize mH24">
                                      <img
                                        width="149"
                                        class="mbody285"
                                        style="display: block"
                                        src="./images/placeholder-533x299.png" border="0"
                                        alt=""
                                      />
                                    </td>
  
                                    <td width="24" class="m0">
                                      <img
                                        width="24"
                                        style="display: block"
                                        class="m0"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <td class="mbody285 fullsize mH24">
                                      <img
                                        class="mbody285"
                                        style="display: block"
                                        width="148"
                                        src="./images/placeholder-533x299.png" border="0"
                                        alt=""
                                      />
                                    </td>
                                    <td width="24" class="m0">
                                      <img
                                        style="display: block"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
                                    <td class="mbody285 fullsize mH24">
                                      <img
                                        style="display: block"
                                        width="148"
                                        class="mbody285"
                                        src="./images/placeholder-533x299.png" border="0"
                                        alt=""
                                      />
                                    </td>
                                    <td width="24" class="m0">
                                      <img
                                        height="24"
                                        width="24"
                                        style="display: block"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
                                    <td class="mbody285 fullsize">
                                      <img
                                        width="149"
                                        class="mbody285"
                                        style="display: block"
                                        src="./images/placeholder-533x299.png" border="0"
                                        alt=""
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                            <tr>
                              <td height="24">
                                <img
                                  height="24"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tr>
                                    <!-- tristar box  -->
  
                                    <td
                                      width="149"
                                      class="mbody285 fullsize mH24"
                                    >
                                      <table
                                      style="border: 1px solid #d7d8d6;border-collapse: initial;"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td 
                                          width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    width="12"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    border="0"
                                                    width="100%"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        height="38"
                                                        class="mHeightUnset"
                                                        style="
                                                          font-weight: 600;
                                                          text-align: left;
                                                          color: #000000;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                        "
                                                        valign="top"
                                                      >
                                                        TRISTAR
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          width="12"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        class="mHeightUnset"
                                                        height="112"
                                                        valign="top"
                                                        style="
                                                          text-align: left;
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          color: #000000;
                                                        "
                                                      >
                                                        25% off limousine transfer
                                                        to or from the Hong Kong
                                                        International Airport
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          width="12"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                          "
                                                        >
                                                          Find out more >
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    width="12"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
  
                               
  
                                    <!-- spacing -->
                                    <td width="24" class="m0">
                                      <img
                                        style="display: block"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <!-- AIRSIM box  -->
                                    <td
                                      width="148"
                                      class="mbody285 fullsize mH24"
                                    >
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <table
                                                    width="100%"
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        class="mHeightUnset"
                                                        height="38"
                                                        valign="top"
                                                        style="
                                                          color: #000000;
                                                          font-weight: 600;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                        "
                                                      >
                                                        AIRSIM
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          width="12"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        height="112"
                                                        class="mHeightUnset"
                                                        style="
                                                          color: #000000;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                        "
                                                      >
                                                        HK$88 for a AIRSIM HK$100
                                                        prepaid card (usual retail
                                                        price: HK$120)
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          hreflang="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                          "
                                                          >Find out more >
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td width="12">
                                            <img
                                              width="12"
                                              style="display: block"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <!-- spacing  -->
  
                                    <td class="m0" width="24">
                                      <img
                                        style="display: block"
                                        height="24"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <!-- Temporary Limit Increase  box  -->
  
                                    <td
                                      width="148"
                                      class="mbdoy285 fullsize mH24"
                                    >
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        border="0"
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                          <td>
                                            <table
                                              width="100%"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    width="100%"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        class="mHeightUnset"
                                                        height="38"
                                                        valign="top"
                                                        style="
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          font-weight: 600;
                                                          color: #000000;
                                                        "
                                                      >
                                                        Temporary Limit Increase
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        class="mHeightUnset"
                                                        height="112"
                                                        valign="top"
                                                        style="
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
  
                                                          color: #000000;
                                                        "
                                                      >
                                                        Call out hotline at
                                                        1800-HSBC NOW (4722 669)
                                                        to request for a temporary
                                                        limit increase
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td class="m0" height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        class="m0"
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: transparent;
                                                          "
                                                          target="_blank"
                                                          href="https://www.hsbc.com.sg/help/faq/credit-cards/#card-activation-and-phonebanking
                                                    "
                                                        >
                                                          Find out more &gt;
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    height="12"
                                                    style="display: block"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <!-- spacing  -->
                                    <td class="m0" width="24">
                                      <img
                                        style="display: block"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <!-- Overseas Card Activation box  -->
  
                                    <td
                                    width="149"
                                    class="mbody285 fullsize">
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        border="0"
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
  
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellpadding="0"
                                              cellspacing="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    width="100%"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        class="mHeightUnset"
                                                        height="38"
                                                        style="
                                                          font-weight: 600;
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        Overseas Card Activation
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        height="112"
                                                        class="mHeightUnset"
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        Ensure your credit card is
                                                        activated for overseas use
                                                        of card magnetic stripes.
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          href="https://www.hsbc.com.sg/help/faq/credit-cards/#card-activation-and-phonebanking
                                                    "
                                                        >
                                                          Find out more >
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
  
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                            <tr>
                              <td height="48">
                                <img
                                  width="48"
                                  height="48"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td>
                                <table
                                  border="0"
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tr>
                                    <td width="40">
                                      <img
                                        width="40"
                                        style="display: block"
                                        src="./images/placeholder-100x100.png"
                                        alt=""
                                      />
                                    </td>
  
                                    <td width="12">
                                      <img
                                        style="display: block"
                                        width="12"
                                        height="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <td
                                    valign="middle"
                                      style="
                                        text-align: left;
                                        font-size: 22px;
                                        line-height: 1.2;
                                        color: #333333;
                                        font-family: Arial, Helvetica, sans-serif;
                                      "
                                    >
                                      Educational Tours & Leisure
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                            <tr>
                              <td height="12">
                                <img
                                  style="display: block"
                                  width="24"
                                  height="12"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td>
                                <table
                                  border="0"
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tr>
                                    <td class="mbody285 fullsize mH24">
                                      <img
                                        width="321"
                                        class="mbody285"
                                        src="./images/placeholder-533x299.png" border="0"
                                        alt=""
                                      />
                                    </td>
  
                                    <td class="m0" width="24">
                                      <img
                                        style="display: block"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <td class="mbody285 fullsize">
                                      <img
                                        class="mbody285 fullsize"
                                        width="321"
                                        src="./images/placeholder-533x299.png" border="0"
                                        alt=""
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                            <tr>
                              <td height="24">
                                <img
                                  height="24"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td>
                                <table
                                  border="0"
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tr>
                                    <!-- ATA Study Tours box  -->
                                    <td
                                      width="149"
                                      class="mbody285 fullsize mH24"
                                    >
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              height="12"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
  
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    border="0"
                                                    width="100%"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        style="
                                                          font-weight: 600;
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                        height="38"
                                                        class="mHeightUnset"
                                                      >
                                                        ATA Study Tours
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        class="mHeightUnset"
                                                        height="112"
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        HK$300 off per person upon
                                                        purchase of 4-5 days
                                                        private car tour
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                        "
                                                          >Find out more >
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
  
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              height="12"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <!-- spacing  -->
                                    <td width="24" class="m0">
                                      <img
                                        style="display: block"
                                        height="24"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <!-- Arrow Travel Agency  box  -->
                                    <td
                                      width="148"
                                      class="mbody285 fullsize mH24"
                                    >
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              height="12"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
  
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    border="0"
                                                    width="100%"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        style="
                                                          font-weight: 600;
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                        height="38"
                                                        class="mHeightUnset"
                                                      >
                                                        Arrow Travel Agency
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        class="mHeightUnset"
                                                        height="112"
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        HK$300 off per person upon
                                                        purchase of 4-5 days
                                                        private car tour
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                        "
                                                          >Find out more >
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
  
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              height="12"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
  
                                    <!-- spacing  -->
                                    <td width="24" class="m0">
                                      <img
                                        style="display: block"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <!-- CGV Cinemas D2 Place  box  -->
  
                                    <td
                                      width="148"
                                      class="mbody285 fullsize mH24"
                                    >
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              height="12"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
  
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    border="0"
                                                    width="100%"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        style="
                                                          font-weight: 600;
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                        height="38"
                                                        class="mHeightUnset"
                                                      >
                                                        CGV Cinemas D2 Place
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        class="mHeightUnset"
                                                        height="112"
                                                      >
                                                        <table>
                                                          <tr>
                                                            <td
                                                              style="
                                                                text-align: left;
                                                                font-size: 14px;
                                                                line-height: 18px;
                                                                color: #333333;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                              "
                                                            >
  
                                                              &bull;&nbsp; 5% off popcorn and
                                                              soft drinks
                                                            </td>
                                                          </tr>
  
                                                          <tr>
                                                            <td
                                                              style="
                                                                text-align: left;
                                                                font-size: 14px;
                                                                line-height: 18px;
                                                                color: #333333;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                              "
                                                            >
                                                              &bull;&nbsp; 15% off
                                                              regular-priced
                                                              ticket
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                        "
                                                          >Find out more >
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
  
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              height="12"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <!-- spacing  -->
                                    <td width="24" class="m0">
                                      <img
                                        style="display: block"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <!-- Golf Partners Company box  -->
  
                                    <td width="149" class="mbody285 fullsize">
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              height="12"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
  
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    border="0"
                                                    width="100%"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        style="
                                                          font-weight: 600;
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                        height="38"
                                                        class="mHeightUnset"
                                                      >
                                                        Golf Partners Company
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                        class="mHeightUnset"
                                                        height="112"
                                                      >
                                                        20% off golf accessories
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                        "
                                                          >Find out more >
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
  
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              height="12"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                            <tr>
                              <td height="48">
                                <img
                                  height="48"
                                  src="./images/spacer.gif"
                                  alt=""
                                />
                              </td>
                            </tr>
  
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tr>
                                    <td width="40">
                                      <img
                                        style="display: block"
                                        width="40"
                                        src="./images/placeholder-100x100.png"
                                        alt=""
                                      />
                                    </td>
                                    <td width="12">
                                      <img
                                        width="12"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <td
                                    valign="middle"
                                      style="
                                        text-align: left;
                                        font-size: 22px;
                                        line-height: 1.2;
                                        color: #333333;
                                        font-family: Arial, Helvetica, sans-serif;
                                      "
                                    >
                                      Pampering Treats
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
  
                            <tr>
                              <td height="12" >
                                <img 
                                style="display: block;"
                                  height="12"
                                src="./images/spacer.gif" alt="">
                                
                              </td>
                            </tr>
  
  
  
  
                            <tr>
                              <td  >
                                <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                  cellpadding="0"
                                >
  
                                <tr>
                                  <td class="mbody285">
                                    <img
                                    width="666"
                                    class="mbody285"
                                    src="./images/placeholder-533x299.png" border="0" alt="">
                                  </td>
                                </tr>
  
                                </table>
                          
                              </td>
  
                            </tr>
  
  
  
                            <tr>
                              <td height="24" >
                                <img 
                                style="display: block;"
                                height="24"
                                src="./images/spacer.gif" alt="">
                              </td>
                            </tr>
  
  
                            
  
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tr>
                                    <!-- Dior Beauty box  -->
  
                                    <td
                                      width="149"
                                      class="mbody285 fullsize mH24"
                                    >
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    width="12"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    border="0"
                                                    width="100%"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        height="56"
                                                        class="mHeightUnset"
                                                        style="
                                                          font-weight: 600;
                                                          text-align: left;
                                                          color: #000000;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                        "
                                                        valign="top"
                                                      >
                                                      Dior Beauty
  
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          width="12"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        class="mHeightUnset"
                                                        height="112"
                                                        valign="top"
                                                        style="
                                                          text-align: left;
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          color: #000000;
                                                        "
                                                      >
                                                      HK$980 for 75-minute Capture Totale Facial Treatment
  
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          width="12"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                          "
                                                        >
                                                        Find out more > 
  
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    width="12"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
  
                                    <!-- spacing -->
                                    <td width="24" class="m0">
                                      <img
                                        style="display: block"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <!-- Kerastase x Beebles hair beaute  box  -->
                                    <td
                                      width="148"
                                      class="mbody285 fullsize mH24"
                                    >
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <table
                                                    width="100%"
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        class="mHeightUnset"
                                                        height="56"
                                                        valign="top"
                                                        style="
                                                          color: #000000;
                                                          font-weight: 600;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                        "
                                                      >
                                                      Kerastase x Beebles hair beaute
  
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          width="12"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        height="112"
                                                        class="mHeightUnset"
                                                        style="
                                                          color: #000000;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                        "
                                                      >
                                                      20% off any hair services (expect blow dry only) for first visit
  
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                          "
                                                          >Find out more >
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td width="12">
                                            <img
                                              width="12"
                                              style="display: block"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <!-- spacing  -->
  
                                    <td class="m0" width="24">
                                      <img
                                        style="display: block"
                                        height="24"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                                    <!-- Dermalogica  box  -->
  
                                    <td
                                      width="148"
                                      class="mbdoy285 fullsize mH24"
                                    >
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        border="0"
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                          <td>
                                            <table
                                              width="100%"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    width="100%"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                  >
                                                    <tr>
                                                      <td
                                                        class="mHeightUnset"
                                                        height="56"
                                                        valign="top"
                                                        style="
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                          font-weight: 600;
                                                          color: #000000;
                                                        "
                                                      >
                                                      Dermalogica
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        class="mHeightUnset"
                                                        height="112"
                                                        valign="top"
                                                        style="
                                                          line-height: 18px;
                                                          font-size: 14px;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
  
                                                          color: #000000;
                                                        "
                                                      >
                                                      A complimentary FaceFit Service (U.P HK$299) and receive 3 skincare samples after service.
  
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td class="m0" height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        class="m0"
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: transparent;
                                                          "
                                                          target="_blank"
                                                          href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                          "
                                                        >
                                                          Find out more &gt;
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    height="12"
                                                    style="display: block"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <!-- spacing  -->
                                    <td class="m0" width="24">
                                      <img
                                        style="display: block"
                                        width="24"
                                        src="./images/spacer.gif"
                                        alt=""
                                      />
                                    </td>
  
                               
  
                                    <!-- IL COLPO Nail  box  -->
  
                                    <td class="mbody285 fullsize">
                                      <table
                                        style="border: 1px solid #d7d8d6;border-collapse:initial;"
                                        border="0"
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
  
                                          <td>
                                            <table
                                              border="0"
                                              width="100%"
                                              cellpadding="0"
                                              cellspacing="0"
                                            >
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td>
                                                  <table
                                                    width="100%"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                  >
                                                    <tr>
                                                      <td
                                                      valign="top"
                                                        class="mHeightUnset"
                                                        height="56"
                                                        style="
                                                          font-weight: 600;
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                      IL COLPO Nail 
  
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        valign="top"
                                                        height="112"
                                                        class="mHeightUnset"
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                      20% off nail service for first visit
  
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td height="12">
                                                        <img
                                                          style="display: block"
                                                          height="12"
                                                          src="./images/spacer.gif"
                                                          alt=""
                                                        />
                                                      </td>
                                                    </tr>
  
                                                    <tr>
                                                      <td
                                                        style="
                                                          text-align: left;
                                                          font-size: 14px;
                                                          line-height: 18px;
                                                          color: #333333;
                                                          font-family: Arial,
                                                            Helvetica, sans-serif;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            color: rgb(
                                                              99,
                                                              159,
                                                              241
                                                            );
                                                          "
                                                          target="_blank"
                                                          href="https://www.homeandaway.hsbc.com/1/2/hna2/local/hk/offers?country=hk&category=tl&cardtype=&currentPage=7
                                                          "
                                                        >
                                                          Find out more >
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
  
                                              <tr>
                                                <td height="12">
                                                  <img
                                                    style="display: block"
                                                    height="12"
                                                    src="./images/spacer.gif"
                                                    alt=""
                                                  />
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
  
                                          <td width="12">
                                            <img
                                              style="display: block"
                                              width="12"
                                              src="./images/spacer.gif"
                                              alt=""
                                            />
                                          </td>
                                        </tr>
  
                                        
                                      </table>
                                    </td>
                                  </tr>
  
  
                                  
                                </table>
                              </td>
                            </tr>
  
  
                            <tr>
                              <td 
                                height="24"
                              >
                                <img 
                                style="display: block;"
                                height="24"
                                src="./images/spacer.gif" alt="">
                              </td>
                            </tr>
  
                            
  
  
  
  
                            
  
  
  
                      
                          </tbody>
                        </table>
                      </td>
  
                   
                    </tr>
  
                    
                  </tbody>
                </table>
          
              
         
              </td>
            </tr>
  
            
          </tbody>
        </table>
      </center>
    </body>
  </html
  `;

  const regex = /border="0"/gm;
  const imageTagCode = "<img  />";

  for (let i = 0; i <= htmlCode.length - 1; ++i) {
    let si = htmlCode[i];
    let sip1 = htmlCode[i + 1];
    let sip2 = htmlCode[i + 2];
    let sip3 = htmlCode[i + 3];

    let wasFoundImgTagHtmlCodePosition = null;
    let jIndex = null;

    if (si + sip1 + sip2 + sip3 === "<img") {
      for (let j = i; j <= htmlCode.length - 1; ++j) {
        let sj = htmlCode[j];
        let sjp1 = htmlCode[j + 1];

        if (sj + sjp1 === "/>") {
          wasFoundImgTagHtmlCodePosition = true;
          jIndex = j + 1;
          break;
        }
      }
    }

    if (wasFoundImgTagHtmlCodePosition) {
      let fullImgTagHtmlCode = "";
      for (let k = i; k <= jIndex; ++k) {
        fullImgTagHtmlCode += htmlCode[k];
      }

      const wasImgHtmlCodeHasBorderAttribute =
        wasImgHtmlCodeHasBorderEqualQuoteZeroQuote(fullImgTagHtmlCode);

      if (!wasImgHtmlCodeHasBorderAttribute) {
        /**
         * + img which don't have border="0"
         * + ret
         *   + add border="0"
         *
         * + step 1: get img html code which don't have border="0" string - done
         * + step 2: onboard insert into a default a string an inserter string
         * + step 3: insert into step 1 border="0" using step 2
         * + step 4: replace default full html code img step 1 by new img step 3
         * + step 5: using write file tech to write ret
         * + step 6: launch ret
         *
         *
         *
         *
         **/

        console.log("fullImgTagHtmlCode: ", fullImgTagHtmlCode);
        console.log("html code at i index: ", i);

        const searchValue = new RegExp(fullImgTagHtmlCode, "gm");
        let replaceValue = "";

        ret = htmlCode.replace(searchValue, replaceValue);

        return;
      }
    }
  }
}

f();

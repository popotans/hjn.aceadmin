using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace hjn.aceadmin.Models
{
    public class AceMenuModel
    {
        public string url { get; set; }
        public string text { get; set; }
        public string id { get; set; }
        /// <summary>
        /// iconclass
        /// </summary>
        public string icon { get; set; }

        public List<AceMenuModel> menus = new List<AceMenuModel>();

        public static List<AceMenuModel> Init()
        {
            List<AceMenuModel> list = new List<AceMenuModel>();

            AceMenuModel m1 = new AceMenuModel()
            {
                id = "1",
                icon = "icon-cog",
                text = "系统设置",
                url = "#"
            };

            m1.menus.Add(new AceMenuModel()
            {
                id = "11",
                icon = "icon-glass",
                text = "节目管理",
                url = "/content/ContentIndex"
            });

            m1.menus.Add(new AceMenuModel()
            {
                id = "12",
                icon = "icon-glass",
                text = "题目管理",
                url = "/admquestion/index"
            });
            m1.menus.Add(new AceMenuModel()
            {
                id = "13",
                icon = "icon-glass",
                text = "参评员工",
                url = "/adm/AdmEmpIndex?subjectid=1"
            });

            list.Add(m1);
            return list;
        }

        public static string InitHtml(List<AceMenuModel> menus, string urlpath = "")
        {
            StringBuilder sb = new StringBuilder();
            bool isopen = false;
            foreach (var menu in menus)
            {
                if (menu.menus.Count > 0 && !isopen && !string.IsNullOrEmpty(urlpath))
                {
                    foreach (var m2 in menu.menus)
                    {
                        isopen = m2.url.ToLower().Contains(urlpath.ToLower());
                        if (isopen)
                        {
                            break;
                        }
                    }
                }

                sb.AppendFormat("<li class='{0}'>", isopen ? "open" : "");
                sb.AppendFormat("<a href=\"{0}\" class=\"dropdown-toggle mitem\"><i class=\"{1}\"></i><span class=\"menu-text\">{2}</span><b class=\"arrow icon-angle-down\"></b></a>",
                    menu.url, menu.icon, menu.text);
                sb.AppendFormat(" <ul class=\"submenu\" style='{0}'>", isopen ? "display:block" : "");
                foreach (var msub in menu.menus)
                {
                    sb.AppendFormat("<li><a href=\"{0}\"><i class=\"{1}\"></i><span class=\"menu-text\">{2}</span></a></li>",
                        msub.url, msub.icon, msub.text);
                }
                sb.AppendFormat("</ul>");
                sb.AppendFormat("</li>");
            }
            return sb.ToString();
        }
    }
}
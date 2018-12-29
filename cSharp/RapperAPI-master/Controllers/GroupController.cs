using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace RapperAPI.Controllers {
    public class GroupController : Controller {
        List<Group> allGroups {get; set;}
        List<Artist> allArtists {get; set;}
        public GroupController() {
            allGroups = JsonToFile<Group>.ReadJson();
            allArtists = JsonToFile<Artist>.ReadJson();
        }
        [HttpGet("groups")]
        public JsonResult Groups(){
            return Json(allGroups);
        }


        //========================================
        [HttpGet("groups/name/{name}")]
        public JsonResult GroupName(string name){
            var query = allGroups.Where(group => group.GroupName == name);
            return Json(query);
        }
        //========================================

        [HttpGet("groups/id/{id}")]
        public JsonResult groupID(int id){
            var query = allGroups.Where(group => group.Id == id);
            return Json(query);
        }
        //========================================

        [HttpGet("groups/displayArtist")]
        public JsonResult groupArtist(){
            var groupArtists = allGroups.Join(allArtists, group => group.Id, artist => artist.GroupId,
            (group, artist) => {group.Members.Add(artist); return group;}).Distinct().GroupBy(group => group.Id);
            return Json(groupArtists);
        }
        //========================================

    }
}
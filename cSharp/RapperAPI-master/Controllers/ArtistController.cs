using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
namespace RapperAPI.Controllers {

    
    public class ArtistController : Controller {

        private List<Artist> allArtists;

        public ArtistController() {
            allArtists = JsonToFile<Artist>.ReadJson();
        }

        //This method is shown to the user navigating to the default API domain name
        //It just display some basic information on how this API functions
        [Route("")]
        [HttpGet]
        public string Index() {
            //String describing the API functionality
            string instructions = "Welcome to the Music API~~\n========================\n";
            instructions += "    Use the route /artists/ to get artist info.\n";
            instructions += "    End-points:\n";
            instructions += "       *Name/{string}\n";
            instructions += "       *RealName/{string}\n";
            instructions += "       *Hometown/{string}\n";
            instructions += "       *GroupId/{int}\n\n";
            instructions += "    Use the route /groups/ to get group info.\n";
            instructions += "    End-points:\n";
            instructions += "       *Name/{string}\n";
            instructions += "       *GroupId/{int}\n";
            instructions += "       *ListArtists=?(true/false)\n";
            return instructions;
        }
        //================================================
        [HttpGet]
        [Route("artists")]
        public string artists(){
            string rappers = "   This is all the artists\n";
            List<Artist> listArtist = allArtists.ToList();
            foreach(var x in listArtist){
                rappers += "    "+x.ArtistName+"\n";
            }
            return rappers;
        }
        //================================================
        [HttpGet]
        [Route("artists/Name/{name}")]
        public string specificArtist(string name){
            string rappers = "   This is all the artists that have "+name+" in it\n";
            List<Artist> listArtist = allArtists.Where(artist => artist.ArtistName.Contains(name)).ToList();
            foreach(var x in listArtist){
                rappers += "    "+x.ArtistName+"\n";
            }
            return rappers;
        }
        //================================================
        [HttpGet]
        [Route("artists/RealName/{name}")]
        public string actualName(string name){
            string rappers = "   This is all the artists real name that have "+name+" in it\n";
            List<Artist> listArtist = allArtists.Where(artist => artist.RealName.Contains(name)).ToList();
            foreach(var x in listArtist){
                rappers += "    "+x.RealName+"\n";
            }
            return rappers;
        }
        //================================================
        [HttpGet]
        [Route("artists/Hometown/{name}")]
        public string hometownName(string name){
            string rappers = "   This is all the artists real name that have "+name+" in it\n";
            List<Artist> listArtist = allArtists.Where(artist => artist.Hometown.Contains(name)).ToList();
            foreach(var x in listArtist){
                rappers += "    "+x.ArtistName+"\n Hometown:"+x.Hometown+"\n";
            }
            return rappers;
        }
         //================================================
        [HttpGet]
        [Route("artists/GroupId/{id}")]
        public string hometownName(int id){
            string rappers = "   This is all the artists real name that have "+id+" in it\n";
            List<Artist> listArtist = allArtists.Where(artist => artist.GroupId == id).ToList();
            foreach(var x in listArtist){
                rappers += "    "+x.ArtistName+"\n Group Id:"+x.GroupId+"\n";
            }
            return rappers;
        }
    }
}
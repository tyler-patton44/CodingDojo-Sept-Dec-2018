using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            List<Artist> oneArtist = Artists.Where(artist => artist.Hometown == "Mount Vernon").ToList();
            // Console.WriteLine(oneArtist[0].ArtistName +""+ oneArtist[0].Age);

            //Who is the youngest artist in our collection of artists?
            int youngest = Artists.Min(artist => artist.Age);
            List<Artist> youngestArtist = Artists.Where(age => age.Age == youngest).ToList();
            // Console.WriteLine(youngestArtist[0].ArtistName);

            //Display all artists with 'William' somewhere in their real name
            List<Artist> namedArtist = Artists.Where(artist => artist.RealName.Contains("William")).ToList();
            // foreach(Artist caller in namedArtist){
            //     Console.WriteLine(caller.RealName);
            // }

            //Display all groups with names less than 8 characters in length.
            List<Group> shortGroups = Groups.Where(name => name.GroupName.Length < 8).ToList();
            // foreach(Group x in shortGroups){
            //     Console.WriteLine(x.GroupName);
            // }

            //Display the 3 oldest artist from Atlanta
            List<Artist> artistsLoca = Artists.Where(artist => artist.Hometown == "Atlanta").ToList();
            List<Artist> oldLatna = Artists.OrderByDescending(artist => artist.Age).Take(3).ToList();

            foreach(Artist rapper in oldLatna){
                Console.WriteLine(rapper.RealName);
            }

            //(Optional) Display the Group Name of all groups that have members that are not from New York City

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
	    Console.WriteLine(Groups.Count);
        }
    }
}

import {User} from './user';
import {Comment} from './comment'; 

export interface Acticle {
  title: string;
  content: string;
  //dateCreation: date;
  //dateModification: date;
  auteur: User; 
  comment: Comment; 

}

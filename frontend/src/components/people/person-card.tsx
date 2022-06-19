import React, { FC } from "react";
import { IPersonProps } from '../../interfaces/person.dto';
import { Avatar, Card } from '@material-ui/core';

import "./person-card.css"

export const PersonCard: FC<IPersonProps> = ({ 
  email, profile_picture, title, company, first_name, last_name 
}: IPersonProps) => {
  return (
    <Card>
      <div className="card center">
        <input type="checkbox" name="checkbox" id="ch" className="card-btn" />
        <div className="left-container center">
          <Avatar
            variant="circular"
            sizes="150px"
            alt={profile_picture}
            // src={profile_picture}
          />
        </div>
        <div className="right-container center">
          <p className="user-name">{`${first_name} ${last_name}`}</p>
          <p className="user-data">{title}</p>
          <p className="user-data">{company}</p>
          <p className="user-data">{email}</p>
        </div>
        <div className="slide center">
          <p>Contact</p>
          <div className="user-info">
            <p className="user-data">Fill with data contact</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

import React, { FC } from "react";
import { IPersonProps } from '../../interfaces/person.dto';
import { Avatar, Card } from '@material-ui/core';

import "./person-card.css";

export const PersonCard: FC<IPersonProps> = (personProps: IPersonProps) => {
  return (
    <Card>
      <div className="card center">
        <input type="checkbox" name="checkbox" id="ch" className="card-btn" />
        <div className="left-container center">
          <Avatar
            variant="circular"
            sizes="150px"
            alt={personProps.profile_picture}
            // src={personProps.profile_picture}
          />
        </div>
        <div className="right-container center">
          <p className="user-name">{`${personProps.first_name} ${personProps.last_name}`}</p>
          <p className="user-data">{personProps.title}</p>
          <p className="user-data">{personProps.company}</p>
          <p className="user-data">{personProps.email}</p>
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

import React from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { CustomButton } from 'aleksmir-ui-kit';
import Comment from '../Comment';
import AddCommentForm from '../AddCommentForm';
import data from '../../data';
import styles from './styles.module.scss';

export const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const comments = data.comments[activeTab === 0 ? 'popular' : 'new'];

  return (
    <Paper elevation={0} className={styles.panel}>
      <div className="container">
        <Typography variant="h6" className={styles.comment_number}>
          42 комментария
        </Typography>
        <CustomButton>Custom</CustomButton>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className={styles.tabs}
          value={activeTab}
          indicatorColor="primary"
          textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className={styles.comments} />
        {comments.map((obj) => (
          <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt} />
        ))}
      </div>
    </Paper>
  );
};

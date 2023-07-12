import React from 'react';
import Hr from '../Hr/Hr';
import Typography from '../Typography/Typography';
import Button from './Button';
import * as Styled from './styles';
import { Download } from '../../context/VideosContext/interfaces';

interface DownloadsProps {
  downloads: Download[];
  showZip?: boolean;
  showTitle?: boolean;
}

const Downloads: React.FC<DownloadsProps> = ({ downloads, showZip = false, showTitle = true }) => {
  return (
    <Styled.Info>
      {showTitle && (
        <>
          <Typography fontWeight={700} tag="h3">
            Downloads
          </Typography>
          <Hr bgColor={'gray200'} />
        </>
      )}
      <Styled.Downloads>
        {downloads.map((download: Download) => {
          if (showZip || download.type != 'zip')
            return (
              <Button
                key={download.url}
                url={download.url}
                type={download.type}
                value={`${download.name}.${download.type}`}
              />
            );
        })}
      </Styled.Downloads>
    </Styled.Info>
  );
};
export default Downloads;

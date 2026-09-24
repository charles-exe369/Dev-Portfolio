import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  // Read your local profile image from the public folder
  const imagePath = join(process.cwd(), 'public', 'profile.jpg');
  const profileImage = await readFile(imagePath);

  // Convert buffer to base64 data URI so it can be rendered safely inside the SVG/HTML response
  const base64Image = `data:image/jpeg;base64,${profileImage.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#09090b', // fallback background matching your dark theme
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={base64Image}
          alt="Charles"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
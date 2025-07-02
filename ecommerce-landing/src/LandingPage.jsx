import React from 'react';
import { colors, radii, spacing, fontSizes, fonts, fontWeights } from './tokens';

export default function LandingPage() {
  return (
    <div style={{
      fontFamily: fonts.primary,
      background: colors.greyCool[25],
      minHeight: '100vh',
      color: colors.greyCool[900],
    }}>
      {/* Header */}
      <header style={{
        padding: spacing[6],
        background: colors.white,
        borderBottom: `1px solid ${colors.greyCool[200]}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontWeight: fontWeights.bold, fontSize: fontSizes.xl }}>ShopMate</span>
        <nav>
          <a href="#" style={{ margin: spacing[3], color: colors.greyCool[700], textDecoration: 'none', fontWeight: fontWeights.medium }}>Home</a>
          <a href="#" style={{ margin: spacing[3], color: colors.greyCool[700], textDecoration: 'none', fontWeight: fontWeights.medium }}>Shop</a>
          <a href="#" style={{ margin: spacing[3], color: colors.greyCool[700], textDecoration: 'none', fontWeight: fontWeights.medium }}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[10],
        background: colors.white,
        borderRadius: radii.xl,
        margin: spacing[8],
        boxShadow: `0 2px 8px ${colors.greyCool[100]}`,
      }}>
        <div style={{ maxWidth: 500 }}>
          <h1 style={{ fontSize: fontSizes.display, fontWeight: fontWeights.bold, marginBottom: spacing[4] }}>
            Discover the Best Deals on Trendy Products
          </h1>
          <p style={{ fontSize: fontSizes.md, color: colors.greyCool[600], marginBottom: spacing[6] }}>
            Shop the latest arrivals in fashion, electronics, and more. Enjoy fast shipping and easy returns.
          </p>
          <button style={{
            background: colors.blue[500],
            color: colors.white,
            border: 'none',
            borderRadius: radii.lg,
            padding: `${spacing[4]}px ${spacing[8]}px`,
            fontSize: fontSizes.lg,
            fontWeight: fontWeights.bold,
            cursor: 'pointer',
            boxShadow: `0 2px 4px ${colors.greyCool[100]}`,
          }}>
            Shop Now
          </button>
        </div>
        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" alt="Trendy products" style={{
          width: 400,
          borderRadius: radii.xl,
          boxShadow: `0 4px 16px ${colors.greyCool[200]}`,
        }} />
      </section>

      {/* Featured Products */}
      <section style={{
        margin: spacing[8],
      }}>
        <h2 style={{ fontSize: fontSizes.xxl, fontWeight: fontWeights.semibold, marginBottom: spacing[6] }}>
          Featured Products
        </h2>
        <div style={{ display: 'flex', gap: spacing[8] }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{
              background: colors.white,
              borderRadius: radii.lg,
              boxShadow: `0 2px 8px ${colors.greyCool[100]}`,
              padding: spacing[6],
              flex: 1,
              minWidth: 220,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img src={`https://source.unsplash.com/collection/190727/200x200?sig=${i}`} alt="Product" style={{
                width: 160,
                height: 160,
                objectFit: 'cover',
                borderRadius: radii.md,
                marginBottom: spacing[4],
              }} />
              <h3 style={{ fontSize: fontSizes.lg, fontWeight: fontWeights.medium, marginBottom: spacing[2] }}>
                Product {i}
              </h3>
              <p style={{ color: colors.greyCool[600], fontSize: fontSizes.md, marginBottom: spacing[3] }}>
                Stylish and high-quality item for your needs.
              </p>
              <span style={{ fontWeight: fontWeights.bold, fontSize: fontSizes.md, color: colors.green[500], marginBottom: spacing[3] }}>
                $49.99
              </span>
              <button style={{
                background: colors.blue[500],
                color: colors.white,
                border: 'none',
                borderRadius: radii.md,
                padding: `${spacing[2]}px ${spacing[5]}px`,
                fontSize: fontSizes.md,
                fontWeight: fontWeights.bold,
                cursor: 'pointer',
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: colors.greyCool[100],
        padding: spacing[6],
        textAlign: 'center',
        color: colors.greyCool[700],
        marginTop: spacing[10],
        borderTopLeftRadius: radii.xl,
        borderTopRightRadius: radii.xl,
      }}>
        &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
      </footer>
    </div>
  );
}
